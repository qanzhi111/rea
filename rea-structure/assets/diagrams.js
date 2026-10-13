(function () {
  if (typeof mermaid === 'undefined') { return; }

  mermaid.initialize({
    startOnLoad: true,
    theme: 'base',
    securityLevel: 'loose',
    fontFamily: "'Smooch Sans', 'PingFang SC', 'Microsoft YaHei', sans-serif",
    themeVariables: {
      primaryColor: '#FFE3EC',
      primaryTextColor: '#3A3442',
      primaryBorderColor: '#E5537E',
      secondaryColor: '#DFF1FB',
      tertiaryColor: '#E4F8EF',
      lineColor: '#C3AEBF',
      textColor: '#3A3442',
      clusterBkg: '#FFFFFF',
      clusterBorder: '#F2D9E3',
      fontSize: '14px'
    },
    flowchart: {
      curve: 'basis',
      nodeSpacing: 26,
      rankSpacing: 42,
      padding: 10,
      useMaxWidth: true
    }
  });
})();
