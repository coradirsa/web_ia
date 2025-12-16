/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });

      return config;
    },

    // 🔒 SECURITY HEADERS - Protección contra XSS, clickjacking, e inyección de código
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            // Content Security Policy - Previene XSS y inyección de scripts
            {
              key: 'Content-Security-Policy',
              value: [
                "default-src 'self'",
                // Scripts: Mismo origen + Google (Analytics, Tag Manager, Ads, reCAPTCHA)
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://google.com https://ssl.google-analytics.com https://*.googlesyndication.com https://*.google.com",
                // Estilos: Inline permitidos para Tailwind + Google Fonts + Ads
                "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.google.com https://tagmanager.google.com",
                // Imágenes: Mismo origen + data URIs + Google services (Analytics, Ads, Maps)
                "img-src 'self' data: https: https://www.googletagmanager.com https://www.google-analytics.com https://ssl.gstatic.com https://www.gstatic.com https://googleads.g.doubleclick.net https://*.google.com https://*.google-analytics.com https://*.googleusercontent.com",
                // Fonts: Google Fonts + local
                "font-src 'self' https://fonts.gstatic.com data:",
                // Conexiones: API propia + N8N + Google services (Analytics, Ads, Tag Manager)
                "connect-src 'self' https://automatic.coradir.com.ar https://www.google-analytics.com https://analytics.google.com https://www.google.com https://www.gstatic.com https://stats.g.doubleclick.net https://googleads.g.doubleclick.net https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
                // Frames: Google reCAPTCHA + Google Ads
                "frame-src 'self' https://www.google.com https://td.doubleclick.net https://bid.g.doubleclick.net",
                // Formularios: Solo al mismo origen y N8N
                "form-action 'self' https://automatic.coradir.com.ar",
                // Base URI: Solo mismo origen
                "base-uri 'self'",
                // Objetos: Bloquear plugins (Flash, etc)
                "object-src 'none'",
                // Upgrade insecure requests
                "upgrade-insecure-requests"
              ].join('; ')
            },
            // X-Frame-Options - Previene clickjacking
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN'
            },
            // X-Content-Type-Options - Previene MIME sniffing
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            },
            // Referrer-Policy - Controla información enviada en referer
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin'
            },
            // Permissions-Policy - Deshabilita APIs peligrosas
            {
              key: 'Permissions-Policy',
              value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
            },
            // X-XSS-Protection - Protección XSS legacy (fallback para navegadores viejos)
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block'
            },
            // Strict-Transport-Security - Fuerza HTTPS (solo si usas SSL)
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=31536000; includeSubDomains'
            }
          ]
        }
      ];
    }
};

export default nextConfig;
