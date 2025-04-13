import "./styles/vars.css";
import "./styles/base.css";
import "./styles/icons.css";
import "./styles/utils.css";
import "./styles/components/custom-block.css";
import "./styles/components/vp-code.css";
import "./styles/components/vp-code-group.css";
import "./styles/components/vp-doc.scss";

import type { Theme } from "vitepress";
import VPBadge from "./components/VPBadge.vue";
import Layout from "./Layout.vue";

export { default as VPBadge } from "./components/VPBadge.vue";
export { default as VPButton } from "./components/VPButton.vue";
export { default as VPHomeContent } from "./components/VPHomeContent.vue";
export { default as VPHomeHero } from "./components/VPHomeHero.vue";
export { default as VPImage } from "./components/VPImage.vue";
export { default as VPLink } from "./components/VPLink.vue";
export { default as VPNavBarSearch } from "./components/VPNavBarSearch.vue";
export { default as VPSocialLink } from "./components/VPSocialLink.vue";
export { default as VPSocialLinks } from "./components/VPSocialLinks.vue";

export { useLocalNav } from "./composables/local-nav";
export { useSidebar } from "./composables/sidebar";

const theme: Theme = {
    Layout,
    enhanceApp: ({ app }) => {
        app.component("Badge", VPBadge);
    },
};

export default theme;
