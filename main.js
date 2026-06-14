document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // CONVERSION EVENT TRACKING & REDIRECTION DELAY
  // ==========================================================================
  // Capture clicks on all CTA buttons and wrap elements to fire Pixel conversion events
  const ctaElements = document.querySelectorAll('#hero-main-link, #hero-cta-btn, #bottom-cta-btn');

  ctaElements.forEach(element => {
    element.addEventListener('click', function(event) {
      // Prevent immediate redirect
      event.preventDefault();
      
      const targetUrl = this.getAttribute('href');
      
      // Fire Facebook Pixel Lead/Purchase event if fbq is defined
      if (typeof fbq === 'function') {
        fbq('track', 'Lead', {
          content_name: 'Sokin Diyor Consultation Request',
          currency: 'UZS',
          value: 100000
        });
      } else {
        console.log('Conversion pixel event simulated: Lead (Value: 100,000 UZS)');
      }

      // Redirect user to Telegram after a small delay (300ms) to ensure tracking fires
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 300);
    });
  });
});
