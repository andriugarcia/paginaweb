<template>
  <v-app>
    <v-main>
      <header
        class="header mb-0"
        style="position: fixed; top: 0; left: 0; right: 0; z-index: 100"
      >
        <v-toolbar flat color="transparent">
          <v-avatar
            size="40"
            style="border: 3px solid #f0134d"
            @click="$router.push({ path: '/' })"
          >
            <v-img
              src="https://pbs.twimg.com/profile_images/1442752801965232131/x2ovRWHQ_400x400.jpg"
            ></v-img>
          </v-avatar>
          <v-spacer></v-spacer>
          <v-btn
            v-if="$i18n.locale == 'es-es'"
            class="mr-1"
            depressed
            color="transparent"
            @click="switchToEnglish"
          >
            <span :class="colorContrast + '--text'"><b>ES</b> / EN</span>
          </v-btn>
          <v-btn
            v-else
            class="mr-1"
            depressed
            color="transparent"
            @click="switchToSpanish"
          >
            <span :class="colorContrast + '--text'">ES / <b>EN</b></span>
          </v-btn>
          <v-btn :color="colorContrast" icon large @click="openEmail">
            <v-icon>mdi-email</v-icon>
          </v-btn>
          <v-btn :color="colorContrast" icon large @click="openTwitter">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn :color="colorContrast" icon large @click="openLinkedin">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
            :color="colorContrast"
            outlined
            small
            @click="downloadResumeFullstack"
            class="mono font-weight-bold ml-3"
          >
            Resume
          </v-btn>
        </v-toolbar>
      </header>
      <slot />
    </v-main>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      colorContrast: "background",
    };
  },
  mounted() {
    this.colorContrastEvent();
    document.getElementById("main").addEventListener("scroll", () => {
      this.colorContrastEvent();
    });
  },
  methods: {
    switchToEnglish() {
      this.$router.replace({
        path: this.$route.path.replaceAll("es", "en"),
      });
      // window.location.href = window.location.href.replaceAll("es", "en");
    },
    switchToSpanish() {
      this.$router.replace({
        path: this.$route.path.replaceAll("en", "es"),
      });
      // window.location.href = window.location.href.replaceAll("en", "es");
    },
    openEmail() {
      window.open("mailto:contacto@andriugarcia.com");
    },

    openTwitter() {
      window.open("https://twitter.com/Versymattic");
    },

    openLinkedin() {
      window.open("https://www.linkedin.com/in/andriugarcia/");
    },
    downloadResumeFullstack() {
      window.open("/AndriuGarcia-WebDeveloperResume.pdf");
    },
    downloadResumeProductManager() {
      window.open("/ResumeAndriuGarcia-ProductManager.pdf");
    },
    colorContrastEvent() {
      if (
        this.$route.name.startsWith("home") &&
        (document.getElementById("main").scrollTop + 20 < window.innerHeight ||
          document.getElementById("main").scrollTop >
            document.getElementById("main").scrollHeight - window.innerHeight)
      ) {
        this.colorContrast = "white";
      } else {
        this.colorContrast = "background";
      }
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Calibre";
  src: local("Calibre"),
    url("../styles/font/CalibreThin.otf") format("truetype");
  font-weight: 200;
}
@font-face {
  font-family: "Calibre";
  src: local("Calibre"),
    url("../styles/font/CalibreRegular.otf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Calibre";
  src: local("Calibre"),
    url("../styles/font/CalibreMedium.otf") format("truetype");
  font-weight: 500;
}
@font-face {
  font-family: "Calibre";
  src: local("Calibre"),
    url("../styles/font/CalibreBold.otf") format("truetype");
  font-weight: 600;
}
@font-face {
  font-family: "Calibre";
  src: local("Calibre"),
    url("../styles/font/CalibreBlack.otf") format("truetype");
  font-weight: 800;
}
body {
  font-family: "Calibre" -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  margin: 0;
  padding: 0;
}

.v-application {
  font-family: "Calibre", sans-serif !important;
  font-weight: light;
}

.v-application .title {
  font-family: "Calibre", sans-serif !important;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__link {
  margin-left: 20px;
}

.shadow {
  -webkit-box-shadow: 10px 10px 0px 0px #000000;
  box-shadow: 10px 10px 0px 0px #000000;
}

.yellow--shadow {
  -webkit-box-shadow: 10px 10px 0px 0px #ffc764;
  box-shadow: 10px 10px 0px 0px #ffc764;
}
</style>
