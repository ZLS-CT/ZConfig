import { ZConfigSettings } from "../ZConfig/index.js"
import * as ZRenderLib from "../ZRenderLib/index"

const exampleConfig = new ZConfigSettings("ZConfig Example Settings", "ZConfigExample", "ZConfigExampleSettings.json")
    .command("zconfigexample")
    .addParagraph({
        varname: "simpleNormalParagraph",
        group: "Debug",
        name: "Markdown",
        category: "Examples",
        subcategory: "Paragraph",
        value: (
            "wow\n" +
            "this is a normal paragraph\n" +
            "it can have multiple lines"
        )
    })
    .addParagraph({
        varname: "simpleNormalParagraph2",
        group: "Debug",
        name: "Markdown",
        category: "Examples",
        subcategory: "Paragraph",
        value: (
            "wow\n" +
            "this is a normal paragraph\n" +
            "it can have multiple lines"
        )
    })
    .addMarkdown({
        varname: "simpleInlineMarkdown",
        group: "Debug",
        name: "Markdown",
        category: "Examples",
        subcategory: "Paragraph",
        value: FileLib.read("ZConfigExample", "ExampleMarkdown.md")
    })
    .addMarkdown({
        varname: "simpleMarkdown",
        group: "Debug",
        name: "Markdown",
        value: FileLib.read("ZConfigExample", "ExampleMarkdown.md")
    })
    .addButton({
        varname: "simpleButton",
        group: "Debug",
        category: "Examples",
        subcategory: "Button",
        name: "Button",
        description: "Executes a function when clicked",
        onPress: () => {
            ChatLib.chat("Hello!")
            Client.currentGui.close()
        }
    })
    .addHud({
        varname: "simpleHud1",
        group: "Debug",
        name: "Hud Example 1",
        description: "A simple hud that can be moved around",
        hudData: {
            hudTitle: "Simple Hud 1",
            baseX: 100,
            baseY: 100,
            baseWidth: 100,
            baseHeight: 20,
            onDraw: (title, x, y, width, height, scaleX, scaleY, isHovered, isSelected) => {
                ZRenderLib.drawRectRGBA(x, y, width, height, ...Variables.globalColors.primary.slice(0, 3), isHovered ? 150 : 100)
                ZRenderLib.drawGUIStringRGBA(title, x, y, ...Variables.globalColors.text, 1, false, Variables.globalConfig.globalTextShadow, 512, 1)
            }
        }
    })
    .addHud({
        varname: "simpleHud2",
        group: "Debug",
        name: "Hud Example 2",
        description: "A simple hud that can be moved around",
        hudData: {
            hudTitle: "Simple Hud 2",
            baseX: 250,
            baseY: 250,
            baseWidth: 75,
            baseHeight: 50,
            onDraw: (title, x, y, width, height, scaleX, scaleY, isHovered, isSelected) => {
                ZRenderLib.drawRectRGBA(x, y, width, height, ...Variables.globalColors.primary.slice(0, 3), isHovered ? 150 : 100)
                ZRenderLib.drawGUIStringRGBA(title, x, y, ...Variables.globalColors.text, 1, false, Variables.globalConfig.globalTextShadow, 512, 1)
            }
        }
    })
    .addColorPicker({
        varname: "simpleColorPicker",
        group: "Debug",
        category: "Examples",
        subcategory: "Color Picker",
        name: "Color Picker",
        description: "Lets you select an rgb value and alpha value2",
        alpha: false,
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Color changed from ${oldValue} to ${newValue}`)
        }
    })
    .addMinecraftColor({
        varname: "simpleMinecraftColor",
        group: "Debug",
        category: "Examples",
        subcategory: "Minecraft Color Picker",
        name: "Minecraft Color Picker",
        description: "Lets you pick a color and a modifier that works in text rendering",
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Minecraft Color changed from ${oldValue} to ${newValue}`)
        }
    })
    .addList({
        varname: "simpleList",
        group: "Debug",
        category: "Examples",
        subcategory: "List",
        name: "List",
        description: 'Lets the user reorder a list, specify display lines in options: [["display line 1", "varname"], ["display line 2", "varname"]]',
        options: [
            ["§aLine 1", "line1"],
            ["§bLine 2", "line2"],
            ["§cLine 3", "line3"],
            ["§dLine 4", "line4"],
            ["§eLine 5", "line5"],
            ["§fLine 6", "line6"],
            ["§1Line 7", "line7"],
            ["§2Line 8", "line8"],
            ["§3Line 9", "line9"],
            ["§4Really long line.......", "line10"],
        ],
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | List changed from ${JSON.stringify(oldValue)} to ${JSON.stringify(newValue)}`)
        }
    })
    .addUnorderedList({
        varname: "simpleUnorderedList1",
        group: "Debug",
        category: "Examples",
        subcategory: "Unordered List",
        name: "Editable Unordered List",
        description: 'Shows the user an editable unorderable list option to add new list items.',
        options: [
            "§aLine 1",
            "§bLine 2",
            "§cLine 3",
            "§dLine 4",
            "§eLine 5",
            "§fLine 6",
            "§1Line 7",
            "§2Line 8",
            "§3Line 9",
            "§4Really long line.......",
        ],
        extra: {
            editable: true,
        },
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Unorderable list changed from ${JSON.stringify(oldValue)} to ${JSON.stringify(newValue)}`)
        }
    })
    .addUnorderedList({
        varname: "simpleUnorderedList2",
        group: "Debug",
        category: "Examples",
        subcategory: "Unordered List",
        name: "Uneditable Unordered List",
        description: 'Shows the user an uneditable unorderable list option to add new list items.',
        options: [
            "§aLine 1",
            "§bLine 2",
            "§cLine 3",
            "§dLine 4",
            "§eLine 5",
            "§fLine 6",
            "§1Line 7",
            "§2Line 8",
            "§3Line 9",
            "§4Really long line.......",
        ],
        extra: {
            editable: false,
        },
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Unorderable list changed from ${JSON.stringify(oldValue)} to ${JSON.stringify(newValue)}`)
        }
    })
    .addDropDown({
        varname: "simpleDropdown",
        group: "Debug",
        category: "Examples",
        subcategory: "Dropdown",
        name: "Dropdown",
        description: "Lets you pick from any amount of pre-defined options",
        options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ],
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Dropdown changed from ${oldValue} to ${newValue}`)
        },
        placeholder: 2,
    })
    .addSelection({
        varname: "simpleSelection",
        group: "Debug",
        category: "Examples",
        subcategory: "Selection",
        name: "Selection",
        description: "Like a dropdown but the value is stored as the name of the option",
        options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
            "Very long option..........",
        ],
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Selection changed from ${oldValue} to ${newValue}`)
        }
    })
    .addSlider({
        varname: "simpleDecimalSlider",
        group: "Debug",
        category: "Examples",
        subcategory: "Slider",
        name: "Slider1",
        description: "Allows you to select a number from any range, defaults to 0-100",
        options: [
            5,
            50,
        ],
        isDecimal: true,
        decimalPlaces: 2,
        increment: 0.01,
        placeholder: 25,
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Slider changed from ${oldValue} to ${newValue}`)
        }
    })
    .addSlider({
        varname: "simpleIntegerSlider",
        group: "Debug",
        category: "Examples",
        subcategory: "Slider",
        name: "Slider2",
        description: "Allows you to select an integer from the range.",
        options: [
            25,
            40,
        ],
        isDecimal: false,
        increment: 1,
        placeholder: 30,
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Slider changed from ${oldValue} to ${newValue}`)
        }
    })
    .addSlider({
        varname: "simplePercentSlider",
        group: "Debug",
        category: "Examples",
        subcategory: "Slider",
        name: "Slider3",
        description: "Allows you to select a percentage from 0-100",
        isPercent: true,
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Slider changed from ${oldValue} to ${newValue}`)
        }
    })
    .addSlider({
        varname: "simpleDefaultSlider",
        group: "Debug",
        category: "Examples",
        subcategory: "Slider",
        // name: "Slider4",
        name: (option) => {
            return `Slider4 | Current Value: §e${option.value}`
        },
        description: "Allows you to select a number from any range, defaults to 0-100",
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Slider changed from ${oldValue} to ${newValue}`)
        }
    })
    .addSwitch({
        varname: "simpleToggle1",
        group: "Debug",
        category: "Examples",
        subcategory: "Switch",
        name: "Switch 1",
        // description: "Toggles on and off when clicked, either true or false",
        description: (option) => {
            return `Toggles on and off when clicked, either true or false. Currently: §e${option.value}`
        },
        placeholder: false,
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Switch changed from ${oldValue} to ${newValue}`)
        }
    })
    .addSwitch({
        varname: "simpleToggle2",
        group: "Debug",
        category: "Examples",
        subcategory: "Switch",
        name: "Switch 2",
        description: 'Requires a switch using requires: ["Switch 1"]',
        requires: [
            {"simpleToggle1": true},
        ],
        placeholder: false,
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Switch changed from ${oldValue} to ${newValue}`)
        }
    })
    .addSwitch({
        varname: "simpleToggle3",
        group: "Debug",
        category: "Examples",
        subcategory: "Switch",
        name: "Switch 3",
        description: 'Requires a switch using requires: ["Switch 1"]',
        requires: [
            {"simpleToggle1": true},
        ],
        placeholder: false,
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Switch changed from ${oldValue} to ${newValue}`)
        }
    })
    .addSwitch({
        varname: "simpleToggle4",
        group: "Debug",
        category: "Examples",
        subcategory: "Switch",
        name: "Switch 4",
        description: 'Requires a switch using requires: ["Switch 1"]',
        requires: [
            {"simpleToggle1": true},
        ],
        placeholder: false,
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Switch changed from ${oldValue} to ${newValue}`)
        }
    })
    .addTextInput({
        varname: "simpleTextInput",
        group: "Debug",
        category: "Examples",
        subcategory: "Text Input",
        name: "Text Input",
        description: "The same as a number input, but also accepts letters",
        value: "Hello",
        requires: [
            {"simpleToggle1": true},
            {"simpleToggle2": true},
        ],
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Text changed from ${oldValue} to ${newValue}`)
        }
    })
    .addNumberInput({
        varname: "simpleNumberInput",
        group: "Debug",
        category: "Examples",
        subcategory: "Number Input",
        name: "Number Input",
        description: "Click to edit, only accepts numbers",
        value: "100",
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Number changed from ${oldValue} to ${newValue}`)
        }
    })
    .addPasswordInput({
        varname: "simplePasswordInput",
        group: "Debug",
        category: "Examples",
        subcategory: "Password Input",
        name: "Password Input",
        description: "Same as a text input but hides the characters when its not selected",
        value: "Password",
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Password changed from ${oldValue} to ${newValue}`)
        }
    })
    .addCheckbox({
        varname: "simpleMultiCheckbox",
        group: "Debug",
        category: "Examples",
        subcategory: "Multi Checkbox",
        name: "Multi Checkbox",
        description: "Adds a paragraph with multiple switches underneath it for parity with amaterasu",
        options: [
            "Check 1",
            "Check 2",
            "Check 3"
        ],
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Checkbox changed from [${oldValue.join(", ")}] to [${newValue.join(", ")}]`)
        }
    })
    .addKeybind({
        varname: "simpleKeybind1",
        group: "Debug",
        category: "Examples",
        subcategory: "Keybind Input",
        name: "Keybind Input",
        description: "Lets you select a keybind, value in code is the keycode for the key or the mouse button -100 for mouse binds (https://gist.github.com/Mumfrey/5cfc3b7e14fef91b6fa56470dc05218a)",
        onPress: () => {
            ChatLib.chat("Hello!")
            Client.currentGui.close()
        },
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Keybind changed from ${oldValue} to ${newValue}`)
        },
    })
    .addKeybind({
        varname: "simpleKeybind2",
        group: "Debug",
        category: "Examples",
        subcategory: "Keybind Input",
        name: "Keybind Input",
        description: "Lets you select a keybind, value in code is the keycode for the key or the mouse button -100 for mouse binds (https://gist.github.com/Mumfrey/5cfc3b7e14fef91b6fa56470dc05218a)",
        showActivateInMenusToggle: true,
        extraPersistent: {
            activateInMenus: true,
        },
        onPress: () => {
            ChatLib.chat("Hello!")
            Client.currentGui.close()
        },
        onValueChanged: (option, oldValue, newValue) => {
            ChatLib.chat(`${option.varname} | Keybind changed from ${oldValue} to ${newValue}`)
        },
    })

    .addDependency("simpleMultiCheckbox", "simpleToggle3", true)
    .addDependency("simpleKeybind1", "simpleDecimalSlider", (value) => value > 25.0)
    .addGroupSorter((a, b) => {
        return a.name.localeCompare(b.name)
    })
    .addCategorySorter((a, b) => {
        const aName = a[0]
        const bName = b[0]
        return aName.localeCompare(bName)
    })
    .addSubcategorySorter((a, b) => {
        const aName = a[0]
        const bName = b[0]
        return aName.localeCompare(bName)
    })
    .addSettingSorter((a, b) => {
        return a.name.localeCompare(b.name)
    })
    .setCategoryDescription(
        "Examples",
        "A list of every example setting type available in ZConfig"
    )
    .setSubcategoryDescription(
        "Slider",
        "A collection of different slider examples"
    )

register("worldLoad", () => {
    ChatLib.command("zconfigexample", true)
})
