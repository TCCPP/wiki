// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import theme from "../../components/vitepress-default";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFaucet, faChevronLeft, faChevronRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";

library.add(faFaucet, faChevronLeft, faChevronRight, faGithub, faArrowUpRightFromSquare, faDiscord);

import { InlineIcon } from "../../components/tccpp";

export default {
    extends: theme,
    Layout: () => {
        return h(theme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        });
    },
    enhanceApp({ app, router, siteData }) {
        app.component("font-awesome-icon", FontAwesomeIcon);
        app.component("InlineIcon", InlineIcon);
    },
} satisfies Theme;
