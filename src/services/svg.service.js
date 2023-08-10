const Svgs = {

}



function getSvg(iconName) {
  return Svgs[iconName]
}

export const svgService = { getSvg }

// in template
// <div className="icon" v-html="getSvg('bars')"></div>
// <img style="width:24px; height:24px" :src="getSvg('add')" alt="" />

// in methodes
// getSvg(iconName) {
//     return svgService.getSvg(iconName)
//   }
