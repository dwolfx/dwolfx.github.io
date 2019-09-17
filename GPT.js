/* Data Layer */
var adSitePage = utag_data.ad_site_page || "";
var adPositions = utag_data.ad_positions;
var adUnit = utag_data.ad_unit;

var parsedPositions = {};
try {
  if (typeof adPositions === "string") {
    parsedPositions = JSON.parse(adPositions);
  } else {
    parsedPositions = adPositions;
  }
} catch (err) {
  console.log(err);
}

/* Correção paleativa para playlist e tópico */
(function() {
  var tipoPagina = utag_data.tipo_pagina;

  if (tipoPagina === "playlist") {
    parsedPositions = JSON.parse(
      '{"mobile": ["banner_mobile1"], "desktop": ["banner_insert"]}'
    );
  } else if (tipoPagina === "topic") {
    parsedPositions = JSON.parse(
      '{"mobile": ["banner_mobile1"], "desktop": ["banner_slb_topo"]}'
    );
  } else if (tipoPagina === "tempo-real") {
    parsedPositions = JSON.parse(
      '{"mobile": ["banner_mobile_fim"], "desktop": ["banner_slb_topo", "banner_insert"]}'
    );
  }
})();

/*
Permite que a otimização da lookuptable
seja ativada por produtos até que todos
estejam configurados
*/
function isSiteOptimizationEnabled() {
  var enabledSites = [
    "g1.globo.com",
    "redeglobo.globo.com",
    "globoesporte.globo.com",
    "cartolafc.globo.com",
    "gshow.globo.com",
    "globoi.com"
  ];

  var currentSiteIsInList = !!enabledSites.filter(
    site => window.location.hostname.indexOf(site) !== -1
  ).length;

  if (!currentSiteIsInList) {
    return false;
  }

  /*
    Se o site atual estiver na lista,
    deve ter adunit e posições para entrar
    na regra de otimização
  */
  return !!adUnit && (!!parsedPositions.desktop || !!parsedPositions.mobile);
}

var hasAdSitePage = adSitePage[0] == "{";

if (hasAdSitePage || isSiteOptimizationEnabled()) {
  console.log("Modulo de otimizacao chamado");
  var adUnitPositions = {};

  if (hasAdSitePage) {
    adUnitPositions = JSON.parse(
      adSitePage
        .split("&" + "quot" + ";")
        .join('"')
        .replace(/&\gt\;/g, ">")
    );
  } else {
    adUnitPositions = {
      a: adUnit,
      d: parsedPositions.desktop,
      m: parsedPositions.mobile
    };
  }

  /* Ajustes MOBILE1 */
  (function mobileAdjust() {
    var hrefArray = window.location.href.split("/");

    if (
      hrefArray.indexOf("cartolafc.globo.com") == -1 &&
      hrefArray.indexOf("famosos.globo.com") == -1 &&
      hrefArray.indexOf("www.globo.com") == -1 &&
      hrefArray.indexOf("globo.com") == -1
    ) {
      if (typeof adUnitPositions.m == "object") {
        adUnitPositions.m[adUnitPositions.m.indexOf("banner_mobile_topo")] =
          "banner_mobile1";
      } else {
        adUnitPositions.mobile[
          adUnitPositions.mobile.indexOf("banner_mobile_topo")
        ] = "banner_mobile1";
      }
    }
  })();

  var adUnit = adUnitPositions.a || adUnitPositions.adUnit;

  /*
    Permite configuração de adunit por QueryString
    ex: www.globo.com?adUnit=Testes
  */
  if (window.location.search.indexOf("adunit=") > 0) {
    adUnit = getParameterByName("adunit");
  }

  var adPositions = adUnitPositions["adPositions"] || [];
  var adPositionsList = utag_data.ad_positions_list;

  if (adPositions.length === 0) {
    for (var j = 0; j < adPositionsList.length; j++) {
      adPositions.push(adPositionsList[j].id);
    }
  }

  if (
    (adUnitPositions.hasOwnProperty("d") ||
      adUnitPositions.hasOwnProperty("adPositionsDesktop")) &&
    Math.min(screen.width, window.innerWidth) >= 732
  ) {
    adPositions = adUnitPositions["d"] || adUnitPositions["adPositionsDesktop"];
  } else if (
    (adUnitPositions.hasOwnProperty("m") ||
      adUnitPositions.hasOwnProperty("adPositionsMobile")) &&
    Math.min(screen.width, window.innerWidth) < 732
  ) {
    adPositions = adUnitPositions["m"] || adUnitPositions["adPositionsMobile"];
  }

  /* Lib GPT */
  if (typeof (googletag && googletag.defineSlot) == "undefined") {
    var gptadslots = [];
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];

    (function() {
      var gads = document.createElement("script");
      gads.async = true;
      gads.type = "text/javascript";
      var useSSL = "https:" == document.location.protocol;
      gads.src =
        (useSSL ? "https:" : "http:") +
        "//www.googletagservices.com/tag/js/gpt.js";
      var node = document.getElementsByTagName("script")[0];
      node.parentNode.insertBefore(gads, node);
    })();
  }

  /* Tag GPT modificada */
  try {
    /* Definindo gptSlots dada a lista de posições */
    var gpt_slots = [];

    window.top.positionsToDisplay = {};

    for (var j = 0; j < adPositionsList.length; j++) {
      if (adPositions.indexOf(adPositionsList[j].id) > -1) {
        window.top.positionsToDisplay[adPositionsList[j].id] = 1;
        gpt_slots.push([
          "ad_unit_useless",
          adPositionsList[j].sizes,
          adPositionsList[j].id,
          adPositionsList[j].targets
        ]);
      }
    }
    adPositionsList = gpt_slots;
  } catch (err) {
    console.log.log(err);
  }

  try {
    /* Definindo adUnit */
    var DFP_NETWORK_ID = "/95377733/";
    var slot = DFP_NETWORK_ID + adUnit;

    /* Adicionado especial exclusivo ao adUnit */
    if (slot.indexOf("Especial_Exclusivo") === -1) {
      if (utag_data.content_type === "Especial_Exclusivo") {
        slot += "/Especial_Exclusivo";
      }
    }
  } catch (err) {
    console.log(err);
  }

  /* Tag principal */
  var adRequested = 0;
  var SlotsAds = {};

  function aba_ativa(e) {
    if (adRequested === 1) {
      return false;
    }

    adRequested = 1;

    try {
      googletag.cmd.push(function() {
        /* Teste Sem singleRequest colocar ?single=0 na URL */
        if (window.location.search.indexOf("single=0") == -1) {
          googletag.pubads().enableSingleRequest();
        }

        googletag.pubads().enableAsyncRendering();

        /* Config SafeFrame */
        var pageConfig = {
          allowOverlayExpansion: true,
          allowPushExpansion: true
        };

        googletag.pubads().setSafeFrameConfig(pageConfig);

        /* targets comuns nesta pagina */
        var pageData = utag_data.pageLevelTargeting || {};

        /* Krux config */
        (function() {
          try {
            var kruxSegments = [];
            var kruxId = "";

            if (window.dmp && window.dmp.api) {
              kruxSegments = window.dmp.api.getSegments().split(",");
              kruxId = window.dmp.api.getDmpId();
            } else {
              kruxSegments = Krux.segments;
              kruxId = Krux.user;
            }

            pageData.ognCluster = kruxSegments;
            pageData.kuid = kruxId;

            notifyHorizonDFP(kruxSegments, kruxId);
          } catch (err) {
            console.log("erro ao adicionar segmentos Krux ao ognCluster ", err);
          }
        })();

        for (data in pageData) {
          googletag.pubads().setTargeting(data + "", pageData[data]);
        }

        /* centralizacao e escondendo as respostas vazias e divs antes das chamadas */
        googletag.pubads().collapseEmptyDivs(true, true);
        googletag.pubads().setCentering(true);

        /* Navegg config */
        (function(w) {
          try {
            var name,
              col,
              persona = JSON.parse(
                window.localStorage.getItem("nvgpersona13574")
              );
            for (col in persona) {
              name = "nvg_" + col;
              name = name.substring(0, 10);
              if (typeof googletag == "object")
                googletag.pubads().setTargeting(name, persona[col]);
              if (typeof GA_googleAddAttr == "function")
                GA_googleAddAttr(name, persona[col]);
            }
            utagdb.log("Navegg -- nova tag implementada!");
          } catch (e) {}
        })(window);

        /* Do an ad call for each slot */
        for (f = 0; f < gpt_slots.length; f++) {
          var slotCalled;

          if (gpt_slots[f][1] == null) {
            continue;
          }

          /* handle OutOfPageSlot */
          if (gpt_slots[f][1] == "OutOfPageSlot") {
            slotCalled = googletag
              .defineOutOfPageSlot(slot, gpt_slots[f][2])
              .addService(googletag.pubads());
          } else {
            slotCalled = googletag
              .defineSlot(slot, gpt_slots[f][1], gpt_slots[f][2])
              .addService(googletag.pubads());
            utagdb.log(slot, gpt_slots[f][1], gpt_slots[f][2]);
          }

          SlotsAds[gpt_slots[f][2]] = slotCalled;

          var data = gpt_slots[f][3] || {};
          for (d in data) {
            slotCalled.setTargeting(d + "", data[d]);
            utagdb.log("setTargeting: ", d + "", data[d]);
          }
        }

        /* codigo para handler do evento no final da renderizacao da publicidade */
        googletag.pubads().addEventListener("slotRenderEnded", function(event) {
          /* recuperando o ID da div que disparou o evento: */
          var div_id = event.slot.getSlotElementId();

          /* Definindo se a publicidade em questao esta vazia */
          var publicidade_visivel = !event.isEmpty;

          /* adicionando classes na div e no html */
          var div = document.getElementById(div_id);
          addClass(div, "tag-manager-publicidade-container");

          if (publicidade_visivel) {
            addClass(div, "tag-manager-publicidade-" + div_id);
            addClass(div, "tag-manager-publicidade-container--carregado");
            if (div_id != "banner_floating" && div_id != "banner_feed_esppub") {
              addClass(div, "tag-manager-publicidade-container--visivel");
              //esta linha serve para funcionar o background quando a tag do DFP eh do tipo safe frame
              div.querySelector("div").style.width = event.size[0] + "px";
            } else {
              //div.style.display = "none";
            }

            addClass(
              document.documentElement,
              "tag-manager-publicidade-" + div_id + "--visivel"
            );

            div.setAttribute("data-cid", event.creativeId);
            div.setAttribute("data-lid", event.lineItemId);
          } else {
            addClass(div, "tag-manager-publicidade-" + div_id);
            addClass(div, "tag-manager-publicidade-container--carregado");
            addClass(div, "tag-manager-publicidade-container--vazio");
            addClass(
              document.documentElement,
              "tag-manager-publicidade-" + div_id + "--vazio"
            );
          }
          /* disparando evento para o document */
          var ads_event = new Event("adserver-ad-rendered");

          ads_event.id_elemento = div_id;
          ads_event.publicidade_visivel = publicidade_visivel;
          ads_event.evento_original = event;

          document.dispatchEvent(ads_event);

          /* chamando callback */
          try {
            callback_ads_rendered(div_id, publicidade_visivel, event);
          } catch (e) {
            /* nenhum callback definido; */
          }
        });

        googletag.pubads().disableInitialLoad();
        googletag.enableServices();
      });

      googletag.cmd.push(function() {
        top.refresh_diaplay_positions = function() {
          /* posicoes a serem chamadas */
          // if(Object.keys(SlotsAds).length>0){

          var positionKeys = Object.keys(top.positionsToDisplay);

          if (positionKeys.length == 0) {
            /* remove intervall */
            window.clearInterval(intervalPositionsToDisplay);
            return false;
          }

          if (document.readyState == "complete") {
            window.clearInterval(intervalPositionsToDisplay);
            setTimeout(top.refresh_diaplay_positions, 10000);
            setTimeout(function() {
              top.positionsToDisplay = {};
            }, 10100);
          }

          for (f = 0; f < positionKeys.length; f++) {
            /* Se a posicao ja esta na pagina, chama e remove do array de posicoes a serem chamadas */
            if (document.getElementById(positionKeys[f])) {
              googletag.display(positionKeys[f]);
              utagdb.log("SlotAds:", SlotsAds);
              googletag.pubads().refresh([SlotsAds[positionKeys[f]]]);
              utagdb.log("chamando: ", positionKeys[f]);
              delete top.positionsToDisplay[positionKeys[f]];
            }
          }
        };
        window.intervalPositionsToDisplay = window.setInterval(
          top.refresh_diaplay_positions,
          100
        ); //fecha interval
      });
    } catch (err) {
      utagdb.log(err);
    }
  } /* Fim função aba_ativa */

  /* Se aba estiver visivel, chamar publicidade */
  if (document.visibilityState === "visible") {
    aba_ativa();
  }

  /* Set the name of the hidden property and the change event for visibility */
  var hidden, visibilityChange;
  if (typeof document.hidden !== "undefined") {
    /* Opera 12.10 and Firefox 18 and later support */
    hidden = "hidden";
    visibilityChange = "visibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
  }

  /* Troca de aba ativa a chamada de publicidade */
  document.addEventListener(visibilityChange, handleVisibilityChange, false);

  function handleVisibilityChange() {
    if (!document[hidden]) {
      aba_ativa();
    }
  }

  (function() {
    var l = document.createElement("link");
    l.type = "text/css";
    l.rel = "stylesheet";
    l.href = "//s3.glbimg.com/cdn/libs/publicidade/1.1.0/publicidade.css";
    var ll = document.getElementsByTagName("head")[0];
    ll.insertBefore(l, ll.firstChild);
  })();
} /* fecha if de { no ad_site_page */

function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else if (!_hasClass(el, className)) {
    el.className += " " + className;
  }
}

function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
