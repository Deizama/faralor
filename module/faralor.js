import FaralorItemSheet from "./sheets/FaralorItemSheet.js";

Hooks.once("init", () => {
    console.log("Faralor | Initialisation du système Faralor");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("faralor", FaralorItemSheet, { makeDefault: true });
})