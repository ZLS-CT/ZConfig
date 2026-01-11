import { ZConfigSettings } from "./index.js"
import * as Variables from "./variables"
import * as Utils from "./utils"

const SetColorPreset = (presetName) => {
    const colorPreset = Variables.colorPresets[presetName]
    const primaryColorOption = globalConfig.data.persistent["primaryColor"]
    const secondaryColorOption = globalConfig.data.persistent["secondaryColor"]
    const tertiaryColorOption = globalConfig.data.persistent["tertiaryColor"]
    const darkerColorOption = globalConfig.data.persistent["darkerColor"]
    const darkColorOption = globalConfig.data.persistent["darkColor"]
    const lightColorOption = globalConfig.data.persistent["lightColor"]
    const brightColorOption = globalConfig.data.persistent["brightColor"]
    const transparentColorOption = globalConfig.data.persistent["transparentColor"]
    const textColorOption = globalConfig.data.persistent["textColor"]
    const secondaryTextColorOption = globalConfig.data.persistent["secondaryTextColor"]
    Utils.ResetColorPickerFromRGB(primaryColorOption, colorPreset.primary)
    Utils.ResetColorPickerFromRGB(secondaryColorOption, colorPreset.secondary)
    Utils.ResetColorPickerFromRGB(tertiaryColorOption, colorPreset.tertiary)
    Utils.ResetColorPickerFromRGB(darkerColorOption, colorPreset.darker)
    Utils.ResetColorPickerFromRGB(darkColorOption, colorPreset.dark)
    Utils.ResetColorPickerFromRGB(lightColorOption, colorPreset.light)
    Utils.ResetColorPickerFromRGB(brightColorOption, colorPreset.bright)
    Utils.ResetColorPickerFromRGB(transparentColorOption, colorPreset.transparent)
    Utils.ResetColorPickerFromRGB(textColorOption, colorPreset.text)
    Utils.ResetColorPickerFromRGB(secondaryTextColorOption, colorPreset.secondaryText)
    globalConfig.callOnChanged(primaryColorOption, colorPreset.primary)
    globalConfig.callOnChanged(secondaryColorOption, colorPreset.secondary)
    globalConfig.callOnChanged(tertiaryColorOption, colorPreset.tertiary)
    globalConfig.callOnChanged(darkerColorOption, colorPreset.darker)
    globalConfig.callOnChanged(darkColorOption, colorPreset.dark)
    globalConfig.callOnChanged(lightColorOption, colorPreset.light)
    globalConfig.callOnChanged(brightColorOption, colorPreset.bright)
    globalConfig.callOnChanged(transparentColorOption, colorPreset.transparent)
    globalConfig.callOnChanged(textColorOption, colorPreset.text)
    globalConfig.callOnChanged(secondaryTextColorOption, colorPreset.secondaryText)
    primaryColorOption.placeholder = colorPreset.primary
    secondaryColorOption.placeholder = colorPreset.secondary
    tertiaryColorOption.placeholder = colorPreset.tertiary
    darkerColorOption.placeholder = colorPreset.darker
    darkColorOption.placeholder = colorPreset.dark
    lightColorOption.placeholder = colorPreset.light
    brightColorOption.placeholder = colorPreset.bright
    transparentColorOption.placeholder = colorPreset.transparent
    textColorOption.placeholder = colorPreset.text
    secondaryTextColorOption.placeholder = colorPreset.secondaryText
}

const globalConfig = new ZConfigSettings(Variables.globalConfigName, "ZConfig", "ZConfigGlobalSettings.json")
    .command("zconfig")
    .addSwitch({
        varname: "outlineOptions",
        group: "Global",
        category: "Preferences",
        subcategory: "Options",
        name: "Outline On Options",
        description: "Whether an outline is shown around each option to make them easier to distinguish",
        placeholder: true
    })
    .addSwitch({
        varname: "globalFullscreen",
        group: "Global",
        category: "Preferences",
        subcategory: "Options",
        name: "Fullscreen Menu",
        description: "Whether the settings menu should be displayed in fullscreen mode",
        placeholder: false
    })
    .addSwitch({
        varname: "globalDarkenBackground",
        group: "Global",
        category: "Preferences",
        subcategory: "Options",
        name: "Darken Background",
        description: "Whether the background should be darkened when the settings menu is open",
        placeholder: true,
        requires: [
            {"globalFullscreen": false}
        ]
    })
    .addSwitch({
        varname: "globalTextShadow",
        group: "Global",
        category: "Preferences",
        subcategory: "Options",
        name: "Menu Text Shadow",
        description: "Whether the menu text should have a text shadow",
        placeholder: true
    })
    .addDropdown({
        varname: "globalColorPreset",
        group: "Global",
        category: "Preferences",
        subcategory: "Options",
        name: "Color Preset",
        description: "Changes the menu colors to a preset. Modifying individual colors will override this.",
        options: Object.keys(Variables.colorPresets),
    })
    .registerListener("globalColorPreset", (option, oldValue, newValue) => {
        SetColorPreset(Object.keys(Variables.colorPresets)[newValue])
    })
    .addColorPicker({
        varname: "primaryColor",
        description: "Primary menu color",
        group: "Global",
        category: "Menu Colors",
        subcategory: "Colors",
        name: "Primary Color",
        placeholder: [90, 102, 255, 255]
    })
    .addColorPicker({
        varname: "secondaryColor",
        description: "Secondary menu color",
        group: "Global",
        category: "Menu Colors",
        subcategory: "Colors",
        name: "Secondary Color",
        placeholder: [13, 13, 13, 255]
    })
    .addColorPicker({
        varname: "tertiaryColor",
        description: "Tertiary menu color",
        group: "Global",
        category: "Menu Colors",
        subcategory: "Colors",
        name: "Tertiary Color",
        placeholder: [30, 30, 30, 255]
    })
    .addColorPicker({
        varname: "darkerColor",
        description: "Darker menu color",
        group: "Global",
        category: "Menu Colors",
        subcategory: "Colors",
        name: "Darker Color",
        placeholder: [20, 20, 20, 255]
    })
    .addColorPicker({
        varname: "darkColor",
        description: "Dark menu color",
        group: "Global",
        category: "Menu Colors",
        subcategory: "Colors",
        name: "Dark Color",
        placeholder: [51, 51, 51, 255]
    })
    .addColorPicker({
        varname: "lightColor",
        description: "Light menu color",
        group: "Global",
        category: "Menu Colors",
        subcategory: "Colors",
        name: "Light Color",
        placeholder: [102, 102, 102, 255]
    })
    .addColorPicker({
        varname: "brightColor",
        description: "Bright menu color",
        group: "Global",
        category: "Menu Colors",
        subcategory: "Colors",
        name: "Bright Color",
        placeholder: [127, 127, 127, 255]
    })
    .addColorPicker({
        varname: "transparentColor",
        description: "Transparent menu color",
        group: "Global",
        category: "Menu Colors",
        subcategory: "Colors",
        name: "Transparent Color",
        placeholder: [102, 102, 102, 100]
    })
    .addColorPicker({
        varname: "textColor",
        description: "Main text color",
        group: "Global",
        category: "Menu Colors",
        subcategory: "Colors",
        name: "Text Color",
        placeholder: [255, 255, 255, 255]
    })
    .addColorPicker({
        varname: "secondaryTextColor",
        description: "Secondary text color",
        group: "Global",
        category: "Menu Colors",
        subcategory: "Colors",
        name: "Secondary Text Color",
        placeholder: [170, 170, 170, 255]
    })
    .addButton({
        varname: "resetColorsButton",
        group: "Global",
        category: "Menu Colors",
        subcategory: "Reset",
        name: "Reset Colors",
        description: "Resets all colors to their default values",
        onPress: () => {
            SetColorPreset(Object.keys(Variables.colorPresets)[globalConfig.globalColorPreset])
        }
    })
