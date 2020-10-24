import Axios from 'axios';

export async function getMenus() {
    const menus = await Axios('/menus');
    return menus.data;
}

export async function getSingleMenu() {
//     const menus = await Axios('/menus');
//     return menus.data;
}

export async function createMenu() {
    // const menus = await Axios('/menus');
    // return menus.data;
}

export async function updateMenu() {
    // const menus = await Axios('/menus');
    // return menus.data;
}

export async function deleteMenu() {
    // const menus = await Axios('/menus');
    // return menus.data;
}