if (window.TAG_MANAGER_SPA !== true) {
  //Verificação tag Google (gpt.js)
  var googletagOK = typeof googletag != "undefined" ? googletag : false;
  //definindo os targets do scopo de pagina
  utag_data["pageLevelTargeting"] = utag_data["pageLevelTargeting"] || {};
  utag_data["pageLevelTargeting"]["tvg_pgName"] = [utag_data["page_name"]];
  utag_data["pageLevelTargeting"]["tvg_cma"] = utag_data["structure_tree"];
  utag_data["pageLevelTargeting"]["tvg_pgStr"] = [
    removeDFPInvalidChars(decodeURI(utag_data["structure_string"]))
  ];
  utag_data["pageLevelTargeting"]["tvg_topico"] =
    utag_data["TOPICO"] || utag_data["topico"];
  utag_data["pageLevelTargeting"]["tvg_temas"] = utag_data["temas"];
  utag_data["pageLevelTargeting"]["pgv_id"] =
    utag_data.horizonclientuuid || null;
  utag_data["pageLevelTargeting"]["tvg_pgTipo"] =
    utag_data["pageLevelTargeting"]["tvg_pgName"] == "index"
      ? ["Home"]
      : [utag_data["pageLevelTargeting"]["tvg_pgName"]];

  /* Tail */
  var tailSegments = getTailSements();
  for (var i = 0; i < tailSegments.length; i++) {
    var tailKey = Object.keys(tailSegments[i]);
    utag_data["pageLevelTargeting"][tailKey] = tailSegments[i][tailKey];
  }

  // Globo_ID
  if (utag_data["bd_suser_provider"] == "anonymous") {
    utag_data["pageLevelTargeting"]["glb_id"] = utag_data["bd_suser_code"];
    utag_data["pageLevelTargeting"]["glb_tipo"] = "anonimo";
  } else if (utag_data["bd_suser_provider"] == "cadun") {
    utag_data["pageLevelTargeting"]["glb_id"] = utag_data["bd_suser_code"];
    utag_data["pageLevelTargeting"]["glb_tipo"] = "logado";
  } else {
    utag_data["pageLevelTargeting"]["glb_id"] = "na";
    utag_data["pageLevelTargeting"]["glb_tipo"] = "anonimo";
  }

  // teste AB Globo.com
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

  //carregando extras
  utag_data["pageLevelTargeting"]["tvg_Extras"] = [];

  if (utag_data.hasOwnProperty("extras")) {
    if (typeof utag_data["extras"] == "string" && utag_data["extras"] != "")
      utag_data["extras"] = JSON.parse(utag_data["extras"]);
    var listaExtrasParams = utag_data["extras"];
    for (key in utag_data["extras"]) {
      if (
        utag_data["extras"].hasOwnProperty(key) &&
        utag_data["extras"][key] != ""
      ) {
        if (typeof utag_data["extras"][key] == "object") {
          for (itemKey in utag_data["extras"][key]) {
            if (utag_data["extras"][key][itemKey] != "")
              utag_data["pageLevelTargeting"]["tvg_Extras"].push(
                encodeURIComponent(
                  key + "=" + utag_data["extras"][key][itemKey]
                )
              );
          }
        } else {
          utag_data["pageLevelTargeting"]["tvg_Extras"].push(
            encodeURIComponent(key + "=" + utag_data["extras"][key])
          );
        }
      }
    }
  } else {
    var listaExtrasParams = [
      "obra",
      "programa",
      "classe",
      "entidade",
      "cidade",
      "temporada_quadro",
      "quadro",
      "signo",
      "jogo"
    ];
    for (param in listaExtrasParams) {
      var key = listaExtrasParams[param];
      if (utag_data.hasOwnProperty(key) && utag_data[key] != "") {
        utag_data["pageLevelTargeting"]["tvg_Extras"].push(
          encodeURIComponent(key + "=" + utag_data[key])
        );
      }
    }
  }

  //variavel para passar o .Home na frente do adUnit:
  utag_data["content_type"] = utag_data["pageLevelTargeting"]["tvg_pgTipo"];
  utag_data["pageLevelTargeting"]["tvg_url"] = [
    window.location.hostname + window.location.pathname
  ];
  if (location.href.indexOf("cartolafc.globo.com") != -1)
    utag_data["pageLevelTargeting"]["tvg_url"] = [
      top.location.href
        .replace(/\?.*/, "")
        .replace(/https?\:\/\//, "")
        .replace("#", "%23")
    ];

  // passagem de parametros ambient, cor_pagina
  utag_data["pageLevelTargeting"]["ambient"] = [];
  utag_data["pageLevelTargeting"]["cor_pagina"] = [];
  utag_data["pageLevelTargeting"]["tipo_pagina"] = [];
  try {
    utag_data["pageLevelTargeting"]["ambient"].push(utag_data["ambient"]);
  } catch (e) {}
  try {
    utag_data["pageLevelTargeting"]["cor_pagina"].push(utag_data["cor_pagina"]);
  } catch (e) {}
  try {
    utag_data["pageLevelTargeting"]["tipo_pagina"].push(
      utag_data["tipo_pagina"]
    );
  } catch (e) {}

  //tratamento para especiais publicitarios
  var listaPalavrasEspecialPublicitario = [
    "/especial%" + "20publicit%" + "C3%" + "A1rio",
    "/especial%" + "20publicitario/",
    "/especial-publicitario/",
    "/especial-publicit%" + "C3%" + "A1rio/",
    "/ep/",
    "/agora%20na%20casa/"
  ];
  for (var indexPalavra in listaPalavrasEspecialPublicitario) {
    var palavra = listaPalavrasEspecialPublicitario[indexPalavra];
    var posPalavra = (utag_data["structure_string"] + "/").indexOf(palavra);
    if (
      (posPalavra > 0 && palavra != "/agora%20na%20casa/") ||
      (posPalavra > 0 &&
        palavra == "/agora%20na%20casa/" &&
        JSON.stringify(utag_data["structure_tree"]).indexOf(
          '"agora na casa","'
        ) != -1)
    ) {
      utag_data["structure_string"] = utag_data["structure_string"].substr(
        0,
        posPalavra
      );
      utag_data["content_type"] = "Especial_Exclusivo";
      break;
    }
  }
  //Mapeando cookies
  window.getCookie = function(name) {
    match = document.cookie.match(new RegExp(name + "=([^;]+)"));
    if (match) return match[1];
  };

  //pegando os cookies ogon
  /*
  clusters_ogon = getCookie('aamoas');
  clusters_ogon = clusters_ogon.split('%26aam%3D');
  if (clusters_ogon.length > 0) {
    clusters_ogon[0] = clusters_ogon[0].replace('aam%3D','');
  }
  */
  utag_data["pageLevelTargeting"]["ognCluster"] = [];

  //pegando os cookies v360+
  nomes_v360 = [
    "video360plus_segunda",
    "video360plus_terca",
    "video360plus_quarta",
    "video360plus_quinta",
    "video360plus_sexta",
    "video360plus_fds"
  ];
  valores_v360 = [];
  for (k = 0; k < nomes_v360.length; k += 1) {
    if (getCookie(nomes_v360[k])) {
      valores_v360.push(nomes_v360[k]);
    }
  }
  utag_data["pageLevelTargeting"]["tvg_v360p"] = valores_v360;
  utag_data["pageLevelTargeting"]["tvg_random"] = [
    parseInt(Math.random() * 10) + 1
  ];

  utagdb.log("page level targeting ", utag_data["pageLevelTargeting"]);
  //utag_data['pageLevelTargeting']['tvg_query'] = window.location.search;
  //utag_data['pageLevelTargeting']['tvg_ref'] = document.referrer;

  /* Tail - Define Tail Params */
  function getTailSements() {
    var getTailTargetParam = function(a) {
      var ttCookieName = "_ttdmp";
      if (!window._ttprofilescache) {
        window._ttprofilescache = {};
        try {
          var c = document.cookie.match(
            "(^|;)\\s*" + ttCookieName + "\\s*=\\s*([^;]+)"
          );
          var d = c ? c.pop().split("|") : [];
          for (var i = 0; i < d.length; i++) {
            var kv = d[i].split(":");
            if (kv[1] && kv[1].indexOf(",") > 0) {
              window._ttprofilescache[kv[0]] = kv[1].split(",");
            } else {
              window._ttprofilescache[kv[0]] = kv[1];
            }
          }
        } catch (e) {}
      }
      return window._ttprofilescache[a] ? window._ttprofilescache[a] : "na";
    };

    var tailSegmentsKeys = [
      "LS" /* Estilo de vida */,
      "S" /* Interesses */,
      "T" /* Time de Futebol */,
      "C" /* Classe Social */,
      "U" /* Microsegmentos */,
      "CA" /* Audiências Customizadas */,
      "E" /* Dispositivos */,
      "A" /* Idade */,
      "G" /* Gênero */
    ];
    var tailSegments = [];

    for (var i = 0; i < tailSegmentsKeys.length; i++) {
      tailSegments.push({
        ["tt" + tailSegmentsKeys[i]]: getTailTargetParam(tailSegmentsKeys[i])
      });
    }

    return tailSegments;
  }

  /* It remove special chars that aren't accepted by dfp */
  function removeDFPInvalidChars(str) {
    if (!str) {
      return "";
    }

    return str.replace(/[\"\'=!+#*~;^()<>\[\]]/g, "");
  }
}
