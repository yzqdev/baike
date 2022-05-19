import { navbar } from "vuepress-theme-hope";

export default navbar([
    {
        text: "物理",
        icon: "physics",
        activeMatch: "^/physics/",
        link: "/physics/",
    },
    {
        text: "法律",
        icon: "law",
        activeMatch: "^/law/",
        link: "/law/",
    },
    {
        text: "经济",
        icon: "economy",
        activeMatch: "^/economy/",
        link: "/economy/",
    },
    {
        text: "音乐",
        icon: "yinle",
        activeMatch: "^/music/",
        link: "/music/",
    },
    {
        text: "常识",
        icon: "common",
        activeMatch: "^/common/",
        link: "/common/",
    },
    {
        text: "做菜",
        icon: "common",
        activeMatch: "^/cook/",
        link: "/cook/",
    },
    {
        text: "医学",
        icon: "common",
        activeMatch: "^/medical/",
        link: "/medical/",
    },
]);
