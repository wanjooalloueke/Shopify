document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.querySelector('[data-menu-toggle]');
  var mobileMenu = document.querySelector('[data-mobile-menu]');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('[data-product-form]').forEach(function (form) {
    var variantsNode = form.querySelector('[data-product-json]');
    var idInput = form.querySelector('[data-variant-id]');
    var addButton = form.querySelector('[data-add-to-cart]');
    var priceTarget = document.querySelector('[data-product-price]');

    if (!variantsNode || !idInput) return;

    var variants = [];
    try {
      variants = JSON.parse(variantsNode.textContent);
    } catch (error) {
      return;
    }

    function formatMoney(cents) {
      if (window.Shopify && typeof window.Shopify.formatMoney === 'function') {
        return window.Shopify.formatMoney(cents);
      }
      return new Intl.NumberFormat(document.documentElement.lang || 'fr-FR', {
        style: 'currency',
        currency: window.Shopify && window.Shopify.currency ? window.Shopify.currency.active : 'XOF',
        maximumFractionDigits: 0
      }).format(cents / 100);
    }

    function selectedOptions() {
      var values = [];
      form.querySelectorAll('[data-option-index]').forEach(function (fieldset) {
        var checked = fieldset.querySelector('input:checked');
        if (checked) values.push(checked.value);
      });
      return values;
    }

    function findVariant() {
      var options = selectedOptions();
      if (!options.length && variants[0]) return variants[0];
      return variants.find(function (variant) {
        return options.every(function (value, index) {
          return variant.options[index] === value;
        });
      });
    }

    function updateVariant() {
      var variant = findVariant();
      if (!variant) return;

      idInput.value = variant.id;

      if (priceTarget) {
        priceTarget.textContent = formatMoney(variant.price);
      }

      if (addButton) {
        addButton.disabled = !variant.available;
        addButton.textContent = variant.available ? addButton.dataset.availableText : addButton.dataset.soldOutText;
      }
    }

    form.querySelectorAll('[data-option-value]').forEach(function (input) {
      input.addEventListener('change', updateVariant);
    });

    updateVariant();
  });
});
