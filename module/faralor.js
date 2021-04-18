import FaralorItemSheet from "./sheets/FaralorItemSheet.js";
import FaralorActorSheet from "./sheets/FaralorActorSheet.js";

Hooks.once("init", () => {
    console.log("Faralor | Initialisation du système Faralor");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("faralor", FaralorItemSheet, { makeDefault: true });
	
	Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("faralor", FaralorActorSheet, { makeDefault: true });
})