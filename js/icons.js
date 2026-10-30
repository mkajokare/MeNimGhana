/* MeNim Ghana: shows line icons in place of emoji. Runs on every page, and again whenever the page
   draws new content (listings, reviews, badges). Emoji with no matching icon are left as they are. */
(function () {
  var ICONS = {"store":"<path d=\"M4 9l1.5-5h13L20 9\"/><path d=\"M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9\"/><path d=\"M5 12v8h14v-8\"/>","pin":"<path d=\"M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z\"/><circle cx=\"12\" cy=\"9.5\" r=\"2.5\"/>","phone-mobile":"<rect x=\"6\" y=\"2\" width=\"12\" height=\"20\" rx=\"2.5\"/><path d=\"M10.5 18h3\"/>","bookmark":"<path d=\"M6 3h12v18l-6-4-6 4z\"/>","bowl":"<path d=\"M3 11h18a9 9 0 0 1-18 0z\"/><path d=\"M8 4v3M12 3v4M16 4v3\"/>","star":"<path d=\"M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.2-5.9 3.2 1.2-6.5-4.8-4.6 6.6-.9z\"/>","note":"<path d=\"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z\"/><path d=\"M14 3v5h5M9 13h6M9 17h6\"/>","wrench":"<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"/>","scissors":"<circle cx=\"6\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><path d=\"M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12\"/>","hospital":"<path d=\"M3 21V8l9-5 9 5v13z\"/><path d=\"M12 9v6M9 12h6\"/>","check-circle":"<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M8 12.5l2.7 2.7L16 9.5\"/>","bolt":"<path d=\"M13 2 4 14h7l-1 8 9-12h-7l1-8z\"/>","pill":"<rect x=\"3\" y=\"8.5\" width=\"18\" height=\"7\" rx=\"3.5\" transform=\"rotate(-45 12 12)\"/><path d=\"M9.2 9.2l5.6 5.6\"/>","bricks":"<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"1.5\"/><path d=\"M3 9.3h18M3 14.7h18M9 4v5.3M15 9.3v5.4M9 14.7V20\"/>","van":"<rect x=\"3\" y=\"4.5\" width=\"18\" height=\"12.5\" rx=\"2.5\"/><path d=\"M3 11h18\"/><circle cx=\"7.5\" cy=\"19\" r=\"1.6\"/><circle cx=\"16.5\" cy=\"19\" r=\"1.6\"/>","shirt":"<path d=\"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z\"/>","camera":"<path d=\"M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z\"/><circle cx=\"12\" cy=\"13.5\" r=\"3.5\"/>","bed":"<path d=\"M3 18V8M3 14h18v4M21 18v-5a3 3 0 0 0-3-3h-7v4\"/><circle cx=\"7\" cy=\"11.5\" r=\"1.7\"/>","phone":"<path d=\"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z\"/>","tag":"<path d=\"M3 12V4h8l10 10-8 8z\"/><circle cx=\"7.5\" cy=\"8.5\" r=\"1.3\"/>","search":"<circle cx=\"10.5\" cy=\"10.5\" r=\"6.5\"/><path d=\"M15.5 15.5 21 21\"/>","cart":"<circle cx=\"9\" cy=\"20\" r=\"1.4\"/><circle cx=\"18\" cy=\"20\" r=\"1.4\"/><path d=\"M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L21 7H6\"/>","chat":"<path d=\"M21 12a8 8 0 0 1-11.6 7.1L4 20l1.1-4.3A8 8 0 1 1 21 12z\"/>","gift":"<rect x=\"3\" y=\"8\" width=\"18\" height=\"4\" rx=\"1\"/><path d=\"M12 8v13M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8\"/><path d=\"M8 8a2.5 2.5 0 1 1 0-5c2.5 0 4 2.5 4 5 0-2.5 1.5-5 4-5a2.5 2.5 0 1 1 0 5\"/>","pencil":"<path d=\"M12 20h9\"/><path d=\"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z\"/>","save":"<path d=\"M5 3h11l4 4v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z\"/><path d=\"M8 3v5h7V3M8 21v-7h8v7\"/>","mail":"<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M3 7l9 6 9-6\"/>","cash":"<rect x=\"2\" y=\"6\" width=\"20\" height=\"12\" rx=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"2.5\"/><path d=\"M6 12h.01M18 12h.01\"/>","card":"<rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M2 10h20M6 15h4\"/>","bank":"<path d=\"M3 10l9-6 9 6\"/><path d=\"M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18\"/>","trend":"<path d=\"M3 17l6-6 4 4 8-8\"/><path d=\"M15 7h6v6\"/>","plug":"<path d=\"M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0z\"/><path d=\"M12 17v5\"/>","clock":"<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3 2\"/>","calendar":"<rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 10h18M8 3v4M16 3v4\"/>","user":"<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21a8 8 0 0 1 16 0\"/>","users":"<circle cx=\"9\" cy=\"8\" r=\"3.5\"/><path d=\"M2 21a7 7 0 0 1 14 0\"/><circle cx=\"17\" cy=\"9\" r=\"2.7\"/><path d=\"M16.5 14.3A6 6 0 0 1 22 20\"/>","bag":"<path d=\"M5 8h14l-1 13H6z\"/><path d=\"M9 8a3 3 0 0 1 6 0\"/>","clipboard":"<rect x=\"5\" y=\"4\" width=\"14\" height=\"17\" rx=\"2\"/><path d=\"M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2H9z\"/><path d=\"M9 12h6M9 16h4\"/>","alert":"<path d=\"M12 3l10 18H2z\"/><path d=\"M12 10v5M12 18h.01\"/>","trash":"<path d=\"M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3\"/>","plus":"<path d=\"M12 5v14M5 12h14\"/>","home":"<path d=\"M3 11l9-8 9 8\"/><path d=\"M5 10v10h14V10\"/><path d=\"M10 20v-6h4v6\"/>","image":"<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><circle cx=\"9\" cy=\"10\" r=\"1.8\"/><path d=\"M21 16l-5-5-8 8\"/>","map":"<path d=\"M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z\"/><path d=\"M9 4v14M15 6v14\"/>","trophy":"<path d=\"M8 4h8v6a4 4 0 0 1-8 0z\"/><path d=\"M8 6H4v2a4 4 0 0 0 4 4M16 6h4v2a4 4 0 0 1-4 4M12 14v4M8 21h8M10 18h4\"/>","building":"<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"1\"/><path d=\"M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3\"/>","globe":"<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18\"/>","heart":"<path d=\"M12 21s-8-4.9-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 6.1-8 11-8 11z\"/>","flame":"<path d=\"M12 22a7 7 0 0 0 7-7c0-3-2-5-3-7-1 2-2 3-3.5 3.5C12.5 8 12 5 10 2 8 5 5 8.5 5 14a7 7 0 0 0 7 8z\"/>","car":"<path d=\"M5 16l1.5-6A2 2 0 0 1 8.4 8.5h7.2a2 2 0 0 1 1.9 1.5L19 16\"/><rect x=\"3\" y=\"16\" width=\"18\" height=\"4\" rx=\"1.5\"/><path d=\"M7.5 18h.01M16.5 18h.01\"/>","lock":"<rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 11V8a4 4 0 0 1 8 0v3\"/>","bell":"<path d=\"M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z\"/><path d=\"M10 21h4\"/>","eye":"<path d=\"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>","key":"<circle cx=\"8\" cy=\"15\" r=\"4\"/><path d=\"M11 12l9-9M16 7l3 3\"/>","cap":"<path d=\"M22 10 12 5 2 10l10 5 10-5z\"/><path d=\"M6 12v5c3 2.5 9 2.5 12 0v-5\"/><path d=\"M22 10v6\"/>","printer":"<path d=\"M6 9V3h12v6\"/><rect x=\"3\" y=\"9\" width=\"18\" height=\"9\" rx=\"2\"/><path d=\"M7 14h10v7H7z\"/>","laptop":"<rect x=\"4\" y=\"5\" width=\"16\" height=\"11\" rx=\"1.5\"/><path d=\"M2 20h20\"/>"};
  var MAP = {"🏪":"store","📍":"pin","📱":"phone-mobile","🔖":"bookmark","🍲":"bowl","⭐":"star","🌟":"star","📝":"note","🔧":"wrench","💇":"scissors","🏥":"hospital","✅":"check-circle","⚡":"bolt","💊":"pill","🏗":"bricks","🚐":"van","👗":"shirt","📷":"camera","🏨":"bed","📞":"phone","🏷":"tag","🔎":"search","🔍":"search","🛒":"cart","💬":"chat","🎁":"gift","✏":"pencil","💾":"save","✉":"mail","📧":"mail","💵":"cash","💳":"card","🏦":"bank","📈":"trend","🔌":"plug","🕐":"clock","⏰":"clock","📅":"calendar","👤":"user","🤝":"users","🛍":"bag","📋":"clipboard","⚠":"alert","🗑":"trash","➕":"plus","🏠":"home","🖼":"image","🗺":"map","🏆":"trophy","🏢":"building","🌐":"globe","🕊":"heart","🔥":"flame","🚗":"car","🔐":"lock","🔒":"lock","🔔":"bell","👁":"eye","🔑":"key","🎓":"cap","🖨":"printer","💻":"laptop"};
  var RE = /(?:[\u{1F300}-\u{1FAFF}\u2600-\u27BF\u2B50\u2B06\u2705\u274C\u23F0\u2795\u2764](?:\uFE0F)?[\u{1F3FB}-\u{1F3FF}]?)/gu;
  var SKIP = {SCRIPT:1, STYLE:1, TEXTAREA:1, OPTION:1, TITLE:1, INPUT:1, SELECT:1, SVG:1, NOSCRIPT:1};
  var css = document.createElement('style');
  css.textContent = '.ico{width:1.1em;height:1.1em;vertical-align:-.17em;flex:none;display:inline-block}';
  (document.head || document.documentElement).appendChild(css);

  function icon(name) {
    var t = document.createElement('template');
    t.innerHTML = '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + ICONS[name] + '</svg>';
    return t.content.firstChild;
  }
  function norm(e) { return e.replace(/[\u{1F3FB}-\u{1F3FF}\uFE0F]/gu, ''); }

  function fixText(node) {
    var text = node.nodeValue;
    if (!text || !/[^\u0000-\u2000]/.test(text)) return;
    RE.lastIndex = 0;
    var m, last = 0, frag = null;
    while ((m = RE.exec(text))) {
      var name = MAP[norm(m[0])];
      if (!name) continue;
      frag = frag || document.createDocumentFragment();
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      frag.appendChild(icon(name));
      last = m.index + m[0].length;
    }
    if (!frag) return;
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(frag, node);
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { if (root.parentNode && !SKIP[root.parentNode.nodeName.toUpperCase()]) fixText(root); return; }
    if (root.nodeType !== 1 || SKIP[root.nodeName.toUpperCase()]) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        for (var p = n.parentNode; p && p !== root.parentNode; p = p.parentNode) { if (SKIP[p.nodeName.toUpperCase()]) return NodeFilter.FILTER_REJECT; }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var list = [], n;
    while ((n = w.nextNode())) list.push(n);
    list.forEach(fixText);
  }
  function start() {
    walk(document.body);
    var pending = [], scheduled = false;
    function flush() { scheduled = false; var items = pending; pending = []; items.forEach(walk); }
    new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        if (m.type === 'characterData') pending.push(m.target);
        else m.addedNodes.forEach(function (n) { pending.push(n); });
      });
      if (!scheduled) { scheduled = true; Promise.resolve().then(flush); }
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
