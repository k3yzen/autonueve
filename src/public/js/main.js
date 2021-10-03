const d = document

import { printModels } from "/js/spareSearcher/printModels.js"
import { getSubmodels } from "/js/spareSearcher/getSubmodels.js"
import { printSubmodels } from "/js/spareSearcher/printSubmodels.js"
import { printYears } from "/js/spareSearcher/printYears.js"
import { searchBtn } from "./spareSearcher/searchBtn.js"
import hamburgerMenu from "./hamburgerBtn.js";
import responsiveQueries from "./responsive.js";

d.addEventListener("DOMContentLoaded", () => {

    hamburgerMenu(".nav-btn", ".nav-menu", ".nav-menu a", "active");
    responsiveQueries("btn-menu", "(min-width: 768px)", "hidden");
    getSubmodels()
    printSubmodels()
    printYears()
    printModels()
    searchBtn()



})