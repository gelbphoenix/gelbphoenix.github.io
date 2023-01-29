import Homepage from "../views/homepage.js";
import Aboutme from "../views/about_me.js";
import Projects from "../views/projects.js";
import SocialMedia from "../views/social_media.js";
import Links from "../views/links.js";
import Imprint from "../views/imprint.js";
import DataSecurity from "../views/data_security.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {path: "/", view: Homepage},
        {path: "/about_me", view: Aboutme},
        {path: "/projects", view: Projects},
        {path: "/social_media", view: SocialMedia},
        {path: "/links", view: Links},
        {path: "/imprint", view: Imprint},
        {path: "/data_security", view: DataSecurity}
    ];

    // test route for match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view(match);

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});