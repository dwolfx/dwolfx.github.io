var desktop_positions_list,
  mobile_positions_list,
  utag_data = utag_data || {};

//DO NOT CHANGE THESE OBJECTS OR IT MAY BREAK ADVERTISING IN PROD
//NÃO MUDE ESTE OBJETO OU A PUBLICIDADE EM PRODUCÃO PODERÁ

// Correção template cobertura
if (utag_data["page_name"] == "cobertura-ao-vivo") {
  var newEl = document.createElement("div");
  newEl.id = "banner_mobile_fim";
  document.body.appendChild(newEl);
  utag_data["ad_positions"].mobile = ["banner_mobile_fim"];
}

// Desktop Positions - Production Placements
desktop_positions_list = [
  {
    id: "banner_floating",
    sizes: "OutOfPageSlot",
    targets: { tvg_pos: ["FLOATING"] }
  },
  {
    id: "banner_insert",
    sizes: "OutOfPageSlot",
    targets: { tvg_pos: ["INSERT"] }
  },
  {
    id: "banner_rm1",
    sizes: [[300, 250], [300, 600]],
    targets: { tvg_pos: ["MATERIA1"] }
  },
  {
    id: "banner_slim_topo",
    sizes: [[300, 50]],
    targets: { tvg_pos: ["SLIM"] }
  },
  {
    id: "banner_slb_topo",
    sizes: [[970, 250], [970, 90], [970, 150], [728, 90]],
    targets: { tvg_pos: ["HOME1"] }
  },
  {
    id: "banner_slb_meio",
    sizes: [[970, 90], [970, 150], [970, 250]],
    targets: { tvg_pos: ["HOME2"] }
  },
  {
    id: "banner_slb_fim",
    sizes: [[970, 90], [970, 150], [970, 250]],
    targets: { tvg_pos: ["HOME3"] }
  },
  {
    id: "banner_rm2",
    sizes: [[300, 250], [300, 600]],
    targets: { tvg_pos: ["RM1"] }
  },
  {
    id: "banner_feed_esppub",
    sizes: ["fluid", [80, 35]],
    targets: { tvg_pos: ["FEED_ESPECIAL"] }
  },
  {
    id: "banner_feed_materia_esppub",
    sizes: ["fluid", [80, 35]],
    targets: { tvg_pos: ["FEED_ESPECIAL"] }
  },
  {
    id: "banner_rm3",
    sizes: [[300, 250], [300, 600]],
    targets: { tvg_pos: ["RM2"] }
  },
  {
    id: "banner_megabox_fim",
    sizes: [[600, 300]],
    targets: { tvg_pos: ["MEGA"] }
  },
  { id: "banner_previsaotempo", sizes: [[280, 50]], targets: {} },
  {
    id: "banner_artigo1",
    sizes: [[300, 250]],
    targets: { tvg_pos: "ARTIGO1" }
  },
  {
    id: "banner_materia1",
    sizes: [[300, 250]],
    targets: { tvg_pos: ["MATERIA1"] }
  },
  {
    id: "banner_materia2",
    sizes: [[970, 250], [970, 150], [970, 90]],
    targets: { tvg_pos: ["MATERIA2"] }
  },
  {
    id: "banner_materia",
    sizes: [[970, 250], [970, 150], [970, 90]],
    targets: { tvg_pos: ["MATERIA"] }
  },
  {
    id: "banner_home1",
    sizes: [[80, 35], [970, 150], [970, 90]],
    targets: { tvg_pos: ["HOME1"] }
  },
  {
    id: "banner_home2",
    sizes: [[970, 250], [970, 150], [970, 90]],
    targets: { tvg_pos: ["HOME2"] }
  },
  {
    id: "banner_home3",
    sizes: [[970, 250], [970, 150], [970, 90]],
    targets: { tvg_pos: ["HOME3"] }
  },
  {
    id: "banner_dynamic",
    sizes: ["fluid", [80, 35]],
    targets: { tvg_pos: ["FEED"] }
  },
  {
    id: "banner_feed",
    sizes: ["fluid", [80, 35]],
    targets: { tvg_pos: ["FEED"] }
  },
  {
    id: "banner_feed_especial",
    sizes: ["fluid", [80, 35]],
    targets: { tvg_pos: ["FEED_ESPECIAL"] }
  },
  {
    id: "banner_feed_placarge",
    sizes: [[970, 90], [970, 150], [970, 250]],
    targets: { tvg_pos: ["FEED"] }
  },
  {
    id: "banner_feed_materia",
    sizes: ["fluid", [80, 35], [970, 90], [970, 150], [970, 250]],
    targets: { tvg_pos: ["FEED"] }
  },
  {
    id: "banner_feed_materia_especial",
    sizes: ["fluid", [80, 35], [970, 90], [970, 150], [970, 250]],
    targets: { tvg_pos: ["FEED_ESPECIAL"] }
  },
  {
    id: "banner_slb_meio_cartola",
    sizes: [[970, 90], [970, 150]],
    targets: { tvg_pos: ["HOME2"] }
  }
];

// Favor incluir div caso haja venda na home { id : 'banner_selo4', position : 'x34', height : '40', width : '65' }
// Mobile Positions - Production Placements
mobile_positions_list_full = [
  {
    id: "banner_mobile_topo",
    sizes: [[300, 50], [320, 50]],
    targets: { tvg_pos: ["HOME1_M"] }
  },
  {
    id: "banner_mobile_meio",
    sizes: [[300, 250]],
    targets: { tvg_pos: ["HOME2_M"] }
  },
  {
    id: "banner_mobile_fim",
    sizes: "OutOfPageSlot",
    targets: { tvg_pos: ["MOB2"] }
  },
  {
    id: "banner_rm1",
    sizes: [[300, 250]],
    targets: { tvg_pos: ["MATERIA1_M"] }
  },
  { id: "banner_rm2", sizes: [[300, 250]], targets: { tvg_pos: ["RM1_M"] } },
  {
    id: "banner_rm2_feed",
    sizes: [[300, 250]],
    targets: { tvg_pos: ["RM1_M"] }
  },
  {
    id: "banner_feed_esppub",
    sizes: ["fluid", [80, 35]],
    targets: { tvg_pos: ["FEED_ESPECIAL_M"] }
  },
  {
    id: "banner_feed_materia_esppub",
    sizes: ["fluid", [80, 35]],
    targets: { tvg_pos: ["FEED_ESPECIAL_M"] }
  },
  { id: "banner_rm3", sizes: [[300, 250]], targets: { tvg_pos: ["RM2_M"] } },
  {
    id: "banner_rm3_feed",
    sizes: [[300, 250]],
    targets: { tvg_pos: ["RM2_M"] }
  },
  {
    id: "banner_materia1",
    sizes: [[300, 250]],
    targets: { tvg_pos: ["MATERIA1_M"] }
  },
  {
    id: "banner_materia2",
    sizes: [[300, 250]],
    targets: { tvg_pos: ["MATERIA2_M"] }
  },
  {
    id: "banner_materia",
    sizes: [[300, 250]],
    targets: { tvg_pos: ["MATERIA_M"] }
  },
  {
    id: "banner_dynamic",
    sizes: ["fluid", [80, 35], [300, 250]],
    targets: { tvg_pos: ["FEED_M"] }
  },
  {
    id: "banner_feed",
    sizes: ["fluid", [80, 35], [300, 250]],
    targets: { tvg_pos: ["FEED_M"] }
  },
  {
    id: "banner_feed_especial",
    sizes: ["fluid", [80, 35]],
    targets: { tvg_pos: ["FEED_ESPECIAL_M"] }
  },
  {
    id: "banner_feed_materia",
    sizes: ["fluid", [80, 35], [300, 250]],
    targets: { tvg_pos: ["FEED_M"] }
  },
  {
    id: "banner_feed_materia_especial",
    sizes: ["fluid", [80, 35]],
    targets: { tvg_pos: ["FEED_ESPECIAL_M"] }
  },
  {
    id: "banner_mobile1",
    sizes: [[320, 50], [320, 100], [300, 250]],
    targets: { tvg_pos: ["HOME1_M"] }
  },
  {
    id: "banner_home1",
    sizes: [[80, 35], [300, 250]],
    targets: { tvg_pos: ["HOME1_M"] }
  },
  {
    id: "banner_home2",
    sizes: [[300, 250], [320, 50], [320, 100]],
    targets: { tvg_pos: ["HOME2_M"] }
  },
  {
    id: "banner_home3",
    sizes: [[300, 250]],
    targets: { tvg_pos: ["HOME3_M"] }
  },
  {
    id: "banner_home4",
    sizes: [[300, 250]],
    targets: { tvg_pos: ["HOME4_M"] }
  },
  { id: "banner_home5", sizes: [[300, 250]], targets: { tvg_pos: ["HOME5_M"] } }
];

// teste do Native na materia
/*if ((utag_data['ad_site_page'] == "g1/tecnologia/home") || (utag_data['ad_site_page'] == "g1/tecnologia/materias")){
    mobile_positions_list_full.find(function(e){
        if(e.id === 'banner_materia2'){
            e.sizes.push('fluid')
            return true;
        }
        return false;
    });

    mobile_positions_list_full.find(function(e){
        if(e.id === 'banner_materia'){
            e.sizes.push('fluid')
            return true;
        }
        return false;
    });
    desktop_positions_list.find(function(e){
        if(e.id === 'banner_materia2'){
            e.sizes.push('fluid')
            return true;
        }
        return false;
    });

    desktop_positions_list.find(function(e){
        if(e.id === 'banner_materia'){
            e.sizes.push('fluid')
            return true;
        }
        return false;
    });

}

// 970x250 no home1 de g1 e gshow
if (typeof utag_data.ad_unit != 'undefined') {
  if ((utag_data['ad_unit'].startsWith("tvg_Gshow") == true) || (utag_data['ad_unit'].startsWith("tvg_GE") == true)){
    desktop_positions_list.find(function(e){
      if(e.id === 'banner_slb_topo'){
        e.sizes.push([970,250])
        return true;
      }
      return false;
    });
  }
}
*/

// Caso nao haja um object utag_data['ad_positions']
mobile_positions_list = [
  {
    id: "banner_mobile_topo",
    sizes: [[300, 50], [320, 50]],
    targets: { tvg_pos: ["HOME1_M"], tvg_fold: ["BTF"] }
  },
  {
    id: "banner_mobile_meio",
    sizes: [[300, 50], [300, 250]],
    targets: { tvg_pos: ["HOME2_M"], tvg_fold: ["BTF"] }
  },
  {
    id: "banner_rm1",
    sizes: [[300, 250]],
    targets: { tvg_pos: ["MATERIA1_M"], tvg_fold: ["BTF"] }
  },
  {
    id: "banner_rm2",
    sizes: [[300, 250]],
    targets: { tvg_pos: ["RM1_M"], tvg_fold: ["BTF"] }
  },
  {
    id: "banner_feed_esppub",
    sizes: ["fluid", [80, 35]],
    targets: { tvg_pos: ["FEED_ESPECIAL_M"], tvg_fold: ["BTF"] }
  },
  {
    id: "banner_rm3",
    sizes: [[300, 250]],
    targets: { tvg_pos: ["RM2_M"], tvg_fold: ["BTF"] }
  },
  {
    id: "banner_mobile1",
    sizes: [[320, 50], [300, 250]],
    targets: { tvg_pos: ["HOME1_M"], tvg_fold: ["BTF"] }
  },
  {
    id: "banner_mobile_fim",
    sizes: "OutOfPageSlot",
    targets: { tvg_pos: ["MOB2"], tvg_fold: ["BTF"] }
  }
];

// Alterações específicas para home globocom
/*
(  function(){
  if(utag_data.structure_tree[0] === 'globocom') {
    // Acrescentando 970x250 no slb_topo
    for(var i = 0; i < desktop_positions_list.length; i++) {
        if(desktop_positions_list[i].id === 'banner_slb_topo') {
            desktop_positions_list[i].sizes.push([970,250]);
            break;
        }
    }
  
    // Remove size fluid de banner_home1
    //for(var i = 0; i < mobile_positions_list_full.length; i++) {
    //  if(mobile_positions_list_full[i].id === 'banner_home1') {
    //      mobile_positions_list_full[i].sizes.splice(mobile_positions_list_full[i].sizes.indexOf('fluid'), 1);
    //      break;
    //  }
    //}
// }
//})();

// Remove banner_slb_topo das páginas de políticos 
(function() {
  if(utag_data.extras && utag_data.extras.classe === 'Politico') {
    // Desktop
    for(var i = 0; i < desktop_positions_list.length; i++) {
      if(desktop_positions_list[i].id === 'banner_slb_topo') {
          desktop_positions_list.splice(i, 1);
          break;
      }
    }
    // Mobile
    for(var i = 0; i < mobile_positions_list_full.length; i++) {
      if(mobile_positions_list_full[i].id === 'banner_mobile_topo') {
          mobile_positions_list_full.splice(i, 1);
          break;
      }
    }
  }
})();


// Teste A/B - GloboEsporte Home
/*(function(){
  var isTest = utag_data['teste'];
  utagdb.log('[ADS] A/B banner_slb_topo 970x250 ativa:', isTest);

  if(isTest && (utag_data.structure_tree[0] === 'globoesporte' && utag_data.tipo_pagina === 'home')) {
    for(var i = 0; i < desktop_positions_list.length; i++) {
      if(desktop_positions_list[i].id === 'banner_slb_topo') {
          var a = desktop_positions_list[i];
          var b = banner_slb_topo_b;
          a.sizes = b.sizes;
          a.targets = b.targets;
          break;
      }
    }
  }
})();
*/

// Load Positions according size of width
var ad_positions_list_original;
var ad_positions_full;

// AJUSTES MOBILE1

if (
  window.location.href.split("/").indexOf("cartolafc.globo.com") == -1 &&
  window.location.href.split("/").indexOf("famosos.globo.com") == -1 &&
  window.location.href.split("/").indexOf("www.globo.com") == -1 &&
  window.location.href.split("/").indexOf("globo.com") == -1 &&
  utag_data["ad_positions"] != undefined &&
  (utag_data["page_name"] == "index" || utag_data["page_name"] == "Home")
) {
  if (typeof utag_data["ad_positions"] === "string") {
    utag_data["ad_positions"] = utag_data["ad_positions"].replace(
      "banner_mobile_topo",
      "banner_mobile1"
    );
  } else {
    if (utag_data["ad_positions"].mobile.indexOf("banner_mobile_topo") != -1)
      utag_data["ad_positions"].mobile[
        utag_data["ad_positions"].mobile.indexOf("banner_mobile_topo")
      ] = "banner_mobile1";
  }
}

if (Math.min(screen.width, window.innerWidth) >= 732) {
  utag_data["ad_positions_list"] = desktop_positions_list;
  ad_positions_list_original = desktop_positions_list;
  ad_positions_full = desktop_positions_list;

  ////// caso tenha ad positions desktop
  try {
    if (utag_data["ad_positions"]) {
      utagdb.log(
        "Pagina com ad_position - efetuando filtro de posicoes desktop..."
      );
      var new_desktop_position_list = [];
      var utag_desktop_positions;

      // No caso de enviarem como objeto e nao como combinado (string)
      if (typeof utag_data["ad_positions"] === "string") {
        utag_desktop_positions = JSON.parse(utag_data["ad_positions"]).desktop;
      } else {
        utag_desktop_positions = utag_data["ad_positions"].desktop;
      }

      for (var each_pos in utag_desktop_positions) {
        var item_position = desktop_positions_list.filter(function(e) {
          return e.id == utag_desktop_positions[each_pos];
        });

        // Se enviarem uma position que nao existe nao aidiona
        if (item_position.length > 0)
          new_desktop_position_list.push(item_position[0]);
      }
      utag_data["ad_positions_list"] = new_desktop_position_list;
      ad_positions_list_original = new_desktop_position_list;
    }
  } catch (e) {
    utagdb.log("Ops, Erro ao processar filtro de posições Desktop..." + e);
  }
  // fim adPositions Desktop
} else {
  ad_positions_full = mobile_positions_list_full;
  // Se foi definido uma lista filtra apenas as posicoes da lista
  if (utag_data["ad_positions"]) {
    utagdb.log("Pagina com ad_position");
    var new_mobile_position_list = [];
    var utag_mobile_positions;

    // No caso de enviarem como objeto e nao como combinado (string)
    if (typeof utag_data["ad_positions"] === "string") {
      utag_mobile_positions = JSON.parse(utag_data["ad_positions"]).mobile;
    } else {
      utag_mobile_positions = utag_data["ad_positions"].mobile;
    }
    if (
      document.getElementById("banner_mobile_fim") &&
      utag_mobile_positions.indexOf("banner_mobile_fim") == -1
    )
      utag_mobile_positions.push("banner_mobile_fim");

    // remove posições MOB1 e MOB2 para páginas matéria multicontent
    if (window.location.href.indexOf(".ghtml") != -1) {
      if (utag_mobile_positions.indexOf("banner_mobile_topo") != -1)
        utag_mobile_positions.splice(
          utag_mobile_positions.indexOf("banner_mobile_topo"),
          1
        );
    }

    for (var each_pos in utag_mobile_positions) {
      var item_position = mobile_positions_list_full.filter(function(e) {
        return e.id == utag_mobile_positions[each_pos];
      });

      // Se enviarem uma position que nao existe nao aidiona
      if (item_position.length > 0)
        new_mobile_position_list.push(item_position[0]);
    }
    utag_data["ad_positions_list"] = new_mobile_position_list;
    ad_positions_list_original = new_mobile_position_list;
  } else {
    utag_data["ad_positions_list"] = mobile_positions_list;
    ad_positions_list_original = mobile_positions_list;
  }
}

// BANNERS DINÂMICOS FEEDS

window.bannerDinamico = function(divId, timestamp, forcePos) {
  if (
    divId == "banner_rm1" ||
    divId == "banner_rm2" ||
    divId == "banner_rm3" ||
    divId == "banner_feed_esppub"
  )
    return false; // Apenas os IDs do Feed devem ser chamados dinamicamente

  adUnit = "";
  try {
    var cru = document.querySelector(".tag-manager-publicidade-container>div")
      .id;
    var re = /95377733\/(\S+?)_\d+__container__/;
    if ((m = re.exec(cru)) !== null) {
      adUnit = "/95377733/" + m[1];
    } else {
      adUnit = top.googletag
        .pubads()
        .getSlots()[0]
        .getAdUnitPath();
    }
  } catch (e) {
    return false;
  }
  try {
    if (document.getElementById("nativeAdjustWidth") == null) {
      (function() {
        var l = document.createElement("style");
        l.id = "nativeAdjustWidth";
        l.innerHTML =
          ".tag-manager-publicidade-container--visivel div {    width: 100% !important;}";
        var ll = document.getElementsByTagName("head")[0];
        ll.insertBefore(l, ll.firstChild);
      })();
    }

    var divID = divId;
    if (timestamp) divID += "_" + timestamp;
    var slot;
    googletag.cmd.push(function() {
      //targets comuns nesta pagina:
      googletag.pubads().disableInitialLoad();
      var pageData = utag_data["pageLevelTargeting"] || {};
      for (d in pageData) {
        googletag.pubads().setTargeting(d + "", pageData[d]);
      }
      if (forcePos == "RMFEED_M") {
        slot = googletag
          .defineSlot(adUnit, ["fluid", [80, 35], [300, 250]], divID)
          .addService(googletag.pubads());
        slot.setTargeting("tvg_pos", ["RMFEED_M"]);
        slot.setTargeting("ogn_pos", ["RMFEED_M"]);
      } else if (forcePos == "RMFEED") {
        slot = googletag
          .defineSlot(adUnit, ["fluid", [80, 35]], divID)
          .addService(googletag.pubads());
        slot.setTargeting("tvg_pos", ["RMFEED"]);
        slot.setTargeting("ogn_pos", ["RMFEED"]);
      } else if (forcePos == "FEEDSB") {
        slot = googletag
          .defineSlot(adUnit, [[970, 90], [728, 90]], divID)
          .addService(googletag.pubads());
        slot.setTargeting("tvg_pos", ["FEEDSB"]);
      } else if (window.innerWidth >= 732) {
        slot = googletag
          .defineSlot(adUnit, [468, 60], divID)
          .addService(googletag.pubads());
        slot.setTargeting("tvg_pos", ["FEEDTR"]);
      } else {
        slot = googletag
          .defineSlot(adUnit, [[300, 50], [320, 50]], divID)
          .addService(googletag.pubads());
        slot.setTargeting("tvg_pos", ["FEEDTR_M"]);
      }
    });
    googletag.cmd.push(function() {
      googletag.display(divID);
      googletag.pubads().refresh([slot]);
    });
  } catch (e) {
    utagdb.log(e);
    return false;
  }
};

// BANNERS DINAMICOS CARREGADOS JUNTO DA PAGINA

var glbDynBann = function(divName) {
  this.divName = divName;
  this.timeHolder = 0;
  this.timeCounter = 1;
};

glbDynBann.prototype.renderBanner = function() {
  this.timeHolder = setInterval(
    function(e) {
      // Verify if the bannerDinamico function is ready

      if (
        typeof window.bannerDinamico == "function" &&
        typeof utag_data["pageLevelTargeting"].ognCluster != "undefined"
      ) {
        if (screen.width >= 728)
          window.bannerDinamico(e.divName, null, "FEEDSB");
        else window.bannerDinamico(e.divName);
        clearInterval(e.timeHolder);
      }

      // protect from execute more then 5x

      if (e.timeCounter < 5) clearInterval(e.timeHolder);
      else e.timeCounter++;
    },
    500,
    this
  );
};

// chamada de banners Dinamicos para qualquer position
// Positions dinamicas, devem passar o timestamp após dois underlines "__" Exemplo: banner_feed__12735412534

var tentativasBLL = {};
window.bannerLazyLoading = function(divId, options) {
  options = options || {};

  divId_ajustado = divId.substr(
    0,
    divId.indexOf("__") != -1 ? divId.indexOf("__") : divId.length
  );

  // Se for matéria não tem RM1 e RM2, Se for Home (desk), não tem RM1 e RM2
  //if (divId_ajustado.indexOf("mobile1")!=-1)
  //return;
  if (
    (utag_data["tipo_pagina"] == "multi-content" &&
      (divId_ajustado.indexOf("rm3") != -1 ||
        divId_ajustado.indexOf("rm2") != -1 ||
        divId_ajustado.indexOf("mobile1") != -1)) ||
    ((utag_data["page_name"] == "index" || utag_data["page_name"] == "home") &&
      Math.min(screen.width, window.innerWidth) >= 970 &&
      (divId_ajustado.indexOf("rm3") != -1 ||
        divId_ajustado.indexOf("rm2") != -1) &&
      !utag_data["tipo_pagina"]) ||
    ((utag_data["page_name"] == "index" || utag_data["page_name"] == "home") &&
      Math.min(screen.width, window.innerWidth) >= 970 &&
      divId_ajustado.indexOf("mobile1") != -1)
  )
    return;
  if (
    utag_data["tipo_pagina"] == "tabela" &&
    divId_ajustado.indexOf("mobile1") != -1
  )
    return;

  // Teste AB Globo.com

  if (
    utag_data["nome_experimento"] != undefined &&
    utag_data["pageLevelTargeting"]["nome_experimento"] == undefined
  ) {
    utag_data["pageLevelTargeting"]["nome_experimento"] = [
      utag_data["nome_experimento"]
    ];
    utag_data["pageLevelTargeting"]["versao_experimento"] = [
      utag_data["versao_experimento"]
    ];
  }

  // Ajuste para diferenciar a chamada de feed em matéria

  if (
    (utag_data["page_name"] == "materia" ||
      utag_data["page_name"] == "noticia" ||
      utag_data["page_name"] == "cobertura-ao-vivo") &&
    divId_ajustado.indexOf("banner_feed") != -1
  )
    divId_ajustado = divId_ajustado.replace("feed", "feed_materia");

  if (
    utag_data["tipo_pagina"] == "placar-ge" &&
    Math.min(screen.width, window.innerWidth) >= 970
  )
    divId_ajustado = divId_ajustado.replace("feed", "feed_placarge");

  var elemDiv = ad_positions_full.filter(function(elem) {
    return elem.id == divId_ajustado;
  })[0];
  utagdb.log(elemDiv);
  var pos = elemDiv.targets;
  var sz = elemDiv.sizes;
  adUnit = options.adUnit ? "/95377733/" + options.adUnit : "";

  /*
      Destroi a posição caso ela já tenha sido renderizada na página.
      Use case: Cartola SPA
    */
  (function() {
    try {
      var definedSlots = googletag.pubads().getSlots();
      for (var i = 0; i < definedSlots.length; i++) {
        if (definedSlots[i].getSlotElementId() === divId_ajustado) {
          googletag.destroySlots([definedSlots[i]]);
        }
      }
    } catch (e) {
      console.log(e);
    }
  })();

  if (!adUnit) {
    try {
      var cru = document.querySelector(".tag-manager-publicidade-container>div")
        .id;
      var re = /95377733\/(\S+?)_\d+__container__/;
      if ((m = re.exec(cru)) !== null) {
        adUnit = "/95377733/" + m[1];
      } else {
        adUnit = top.googletag
          .pubads()
          .getSlots()[0]
          .getAdUnitPath();
      }
    } catch (e) {
      if (tentativasBLL[divId]) clearInterval(tentativasBLL[divId]);
      tentativasBLL[divId] = setTimeout(bannerLazyLoading, 3000, divId);
      return false;
    }
  }

  try {
    if (document.getElementById("nativeAdjustWidth") == null) {
      (function() {
        var l = document.createElement("style");
        l.id = "nativeAdjustWidth";
        l.innerHTML =
          ".tag-manager-publicidade-container--visivel div { width: 100% !important;}";
        var ll = document.getElementsByTagName("head")[0];
        ll.insertBefore(l, ll.firstChild);
      })();
    }

    var slot;
    googletag.cmd.push(function() {
      //targets comuns nesta pagina:
      googletag.pubads().disableInitialLoad();
      var pageData = utag_data["pageLevelTargeting"] || {};
      pageData["pgv_id"] = utag_data.horizonclientuuid || null;
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

        pageData["ognCluster"] = kruxSegments;
        pageData["kuid"] = kruxId;
      } catch (e) {
        utagdb.log("erro ao adicionar segmentos Krux ao ognCluster ", e);
      }
      for (key in pageData) {
        var val = pageData[key];
        if (key === "cor_pagina" && typeof val[0] === "string") {
          val = val[0].replace("#", "");
        }
        googletag.pubads().setTargeting(key + "", val);
      }
      utagdb.log(divId);
      slot = googletag
        .defineSlot(adUnit, sz, divId)
        .addService(googletag.pubads());
      for (itemInPos in pos) {
        slot.setTargeting(itemInPos, elemDiv.targets[itemInPos]);
      }

      var abAlternative = options.abAlternative;

      if (!!abAlternative) {
        if (abAlternative === "controle") abAlternative = "0";
        else if (abAlternative.includes("mab")) abAlternative = "1";

        slot.setTargeting("mab", abAlternative);
      }

      var feed = options.feed;
      slot.setTargeting("feed", feed);
    });
    googletag.cmd.push(function() {
      //googletag.display( elemDiv );
      googletag.display(divId);
      googletag.pubads().refresh([slot]);
    });
  } catch (e) {
    utagdb.log(e);
    return false;
  }
};
window.bannerFeed = window.bannerLazyLoading;

window.cartolaLoadAdPositions = function() {
  window.setTimeout(function() {
    if (!googletag.pubadsReady) {
      var interval = window.setInterval(function() {
        window.cartolaLoadAdPositions();
        window.clearInterval(interval);
      }, 300);
      return false;
    }

    var definedSlots = googletag.pubads().getSlots();
    var adPositions = document.querySelectorAll("[id*=banner_]");

    for (var i = 0; i < adPositions.length; i++) {
      var adPositionId = adPositions[i].id;

      if (
        adPositionId !== "banner_insert" &&
        adPositionId !== "banner_mobile_fim"
      ) {
        for (var j = 0; j < definedSlots.length; j++) {
          if (definedSlots[j].getSlotElementId() === adPositionId) {
            utagdb.log("slot to destroy", definedSlots[j]);
            googletag.destroySlots([definedSlots[j]]);
          }
        }

        window.bannerLazyLoading(adPositionId, {
          adUnit: window.utag_data.ad_site_page.a
        });
      }
    }
  }, 0);
};
