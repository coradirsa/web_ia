 import "./globals.css";
 

export const metadata = {
  title: "Coradir IA",
  description: "Coradir IA",
  icons: {
    icon: './favicon.ico'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
      {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={{__html:`function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-T368DR66');`}} />
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-2YRKT46G7S"></script> 
      <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2YRKT46G7S');` }}/>  
      </head>
      <body className="bg-background font-montserrat scroll-smooth">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T368DR66" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        {children}
      </body>
    </html>
  );
}
