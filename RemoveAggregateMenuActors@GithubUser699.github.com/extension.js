//Found in GNOME 3.38 panel.js
//--> class AggregateMenu extends PanelMenu.Button
//in the _init() function
//Line 761 - 776


const Main = imports.ui.main;
const SPath = Main.panel.statusArea.aggregateMenu;
const Path = Main.panel.statusArea.aggregateMenu.menu.box;

class RemoveAggregateMenuActors {

	constructor() {}

	enable() { //remove things
		Path.remove_actor(SPath._volume.menu.actor); //volume slider
		Path.remove_actor(SPath._brightness.menu.actor); //brightness slider
		//Path.remove_actor(SPath._network.menu.actor); //wifi option
		Path.remove_actor(SPath._bluetooth.menu.actor); //bluetooth option
		//Path.remove_actor(SPath._power.menu.actor); //battery info option
		Path.remove_actor(SPath._system.menu.actor); //settings, lock, turn off, restart, logout options
	}

	disable() { //insert things
		Path.insert_child_at_index(SPath._volume.menu.actor, 1); //volume slider
		Path.insert_child_at_index(SPath._brightness.menu.actor, 2); //brightness slider
		Path.insert_child_at_index(SPath._network.menu.actor, 3); //wifi option
		Path.insert_child_at_index(SPath._bluetooth.menu.actor, 4); //bluetooth option
		//Path.insert_child_at_index(SPath._power.menu.actor, 5); //battery info option
		Path.insert_child_at_index(SPath._system.menu.actor, 6); //settings, lock, turn off, restart, logout options
	}
}

function init() {
	return new RemoveAggregateMenuActors();
}
