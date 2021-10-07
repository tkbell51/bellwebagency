<template>
  <main>
    <PageHeader :title="'Lets Get Started'" />
    <section>
      <div class="container">
        <div v-if="isHBLoaded">
          <div class="hb-p-5f0f18edaa2cc1006f5c2aad-1"></div>
          <img
            height="1"
            width="1"
            style="display: none"
            src="https://www.honeybook.com/p.png?pid=5f0f18edaa2cc1006f5c2aad"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isHBLoaded: false,
    };
  },
  // key(route) {
  //   return route.fullPath;
  // },
  mounted() {},
  head() {
    return {
      title: "Contact | Bell Web Agency",
      script: [
        {
          hid: "honeybook",
          innerHTML: `(function (h, b, s, n, i, p, e, t) { h._HB_ = h._HB_ || {};h._HB_.pid = i;t = b.createElement(s);t.type = 'text/javascript';t.async = !0;t.src = n;e = b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t, e);})(window,document,'script','https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js','5f0f18edaa2cc1006f5c2aad');`,
          defer: true,
          body: true,
          
          // Changed after script load
          callback: () => {
            this.isHBLoaded = true;
          },
        },
      ],
      __dangerouslyDisableSanitizers: ['script']
    };
  },
};
</script>

<style lang="scss" scoped></style>
