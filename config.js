// config.js - Pas hier je producten en prijzen aan.
const CONFIG = {
    GOOGLE_URL: "https://script.google.com/macros/s/AKfycbw4HCKu5DRqDvC6SsqdxhpVviAlSc1Se18gsQFSOEA70h2DkOHI6OBpb_ca4kxccMfjMA/exec",
    CATS: ["Hardlopers", "Warm/Fris", "Alcohol", "Zoetigheden", "Broodjes/Soep", "Diversen"],
    PRODUCTS: [
        // --- CATEGORIE 0: HARDLOPERS ---
        // Rij 1: Koffie
        {c:0, n:"Koffie", p:3.60, bg:"darkred"}, {c:0, n:"Cappuccino", p:4.00, bg:"darkred"}, {c:0, n:"Koffie Verkeerd", label:"KOFFIE<br>VERKEERD", p:4.50, bg:"darkred"}, {c:0, n:"Espresso", p:3.60, bg:"darkred"}, {c:0, n:"Dubbele Espresso", label:"DUBBELE<br>ESPRESSO", p:4.15, bg:"darkred"}, {c:0, n:"Latte Macchiato", label:"LATTE<br>MACCHIATO", p:4.50, bg:"darkred"},
        // Rij 2: Thee & Choco
        {c:0, n:"Thee", p:3.75, bg:"green"}, {c:0, n:"Munt Thee", label:"MUNT<br>THEE", p:4.25, bg:"green"}, {c:0, n:"Gember Thee", label:"GEMBER<br>THEE", p:4.25, bg:"green"}, {c:0, n:"Havermelk", p:0.65, bg:"lightpurple"}, {c:0, n:"Flat White", label:"FLAT<br>WHITE", p:4.50, bg:"darkred"}, {c:0, n:"Warme Chocolademelk", label:"WARME<br>CHOCOLADEMELK", p:4.25, bg:"purple"},
        // Rij 3: Slagroom onder Choco
        {c:0, spacer:true}, {c:0, spacer:true}, {c:0, spacer:true}, {c:0, spacer:true}, {c:0, spacer:true}, {c:0, n:"Slagroom", p:0.75, bg:"pink"},
        // Rij 4: Focaccia & Salade
        {c:0, n:"Focaccia Caprese", label:"FOCACCIA<br>CAPRESE", p:10.95, bg:"brightgreen"}, {c:0, n:"Focaccia Tonijn", label:"FOCACCIA<br>TONIJN", p:10.95, bg:"brightgreen"}, {c:0, n:"Focaccia Gegrilde Groenten", label:"FOCACCIA<br>GEGRILDE<br>GROENTEN", p:10.95, bg:"brightgreen"}, {c:0, n:"Focaccia Prosciutto", label:"FOCACCIA<br>PROSCIUTTO", p:10.95, bg:"brightgreen"}, {c:0, n:"Salade Caprese", label:"SALADE<br>CAPRESE", p:13.00, bg:"brightgreen"}, {c:0, n:"Salade Tonijn", label:"SALADE<br>TONIJN", p:13.00, bg:"brightgreen"},
        // Rij 5: Snacks
        {c:0, n:"Kaasbroodje Vega", label:"KAASBROODJE<br>VEGA", p:3.95, bg:"orange"}, {c:0, n:"Saucijzenbroodje Vega", label:"SAUCIJZENBROODJE<br>VEGA", p:3.95, bg:"orange"}, {c:0, n:"Quiche Vega", label:"QUICHE<br>VEGA", p:4.25, bg:"orange"}, {c:0, n:"Soep & Soepbroodje", label:"SOEP &<br>SOEPBROODJE", p:7.25, bg:"orange"}, {c:0, n:"Broodje hotdog", label:"BROODJE<br>HOTDOG", p:4.50, bg:"orange"}, {c:0, n:"Croissant Boter & Jam", label:"CROISSANT<br>BOTER & JAM", p:3.75, bg:"olive"},
        // Rij 6: Gebak
        {c:0, n:"Dudok Appelgebak", label:"DUDOK<br>APPELGEBAK", p:5.75, bg:"darkred"}, {c:0, n:"Dudok Red Velvet", label:"DUDOK RED<br>VELVET", p:5.75, bg:"darkred"}, {c:0, n:"Citroen Meringue", label:"CITROEN<br>MERINGUE", p:5.75, bg:"darkred"}, {c:0, n:"Dubai Vanille", label:"DUBAI<br>VANILLE", p:5.75, bg:"darkred"}, {c:0, n:"Vegan Glutenvrij Gebak", label:"VEGAN<br>GLUTENVRIJ GEBAK", p:5.50, bg:"lightblue"}, {c:0, n:"Black velvet", label:"BLACK<br>VELVET", p:5.75, bg:"darkred"},
        // Rij 7: Slagroom onder Appelgebak
        {c:0, n:"Slagroom", p:0.75, bg:"pink"}, {c:0, spacer:true}, {c:0, spacer:true}, {c:0, spacer:true}, {c:0, spacer:true}, {c:0, spacer:true},
        // Rij 8: Overig
        {c:0, n:"Los fruit", label:"LOS<br>FRUIT", p:2.00, bg:"darkgreen"}, {c:0, n:"Muffin", p:3.50, bg:"magenta"}, {c:0, n:"Donut", p:3.50, bg:"magenta"}, {c:0, spacer:true}, {c:0, spacer:true}, {c:0, spacer:true},

        // --- CATEGORIE 1: WARM/FRIS ---
        // R1: Koffie (Warm)
        {c:1, n:"Koffie", p:3.60, bg:"darkred"}, {c:1, n:"Cappuccino", p:4.00, bg:"darkred"}, {c:1, n:"Koffie Verkeerd", label:"KOFFIE<br>VERKEERD", p:4.50, bg:"darkred"}, {c:1, n:"Espresso", p:3.60, bg:"darkred"}, {c:1, n:"Dubbele Espresso", label:"DUBBELE<br>ESPRESSO", p:4.15, bg:"darkred"}, {c:1, n:"Latte Macchiato", label:"LATTE<br>MACCHIATO", p:4.50, bg:"darkred"},
        // R2: Specials & Havermelk (Onder Latte)
        {c:1, spacer:true}, {c:1, spacer:true}, {c:1, spacer:true}, {c:1, n:"Espresso Macch.", label:"ESPRESSO<br>MACCH.", p:3.75, bg:"darkred"}, {c:1, n:"Flat White", label:"FLAT<br>WHITE", p:4.50, bg:"darkred"}, {c:1, n:"Havermelk", p:0.65, bg:"lightpurple"},
        // R3: Thee & Choco (Warm)
        {c:1, n:"Thee", p:3.75, bg:"green"}, {c:1, n:"Munt Thee", label:"MUNT<br>THEE", p:4.25, bg:"green"}, {c:1, n:"Gember Thee", label:"GEMBER<br>THEE", p:4.25, bg:"green"}, {c:1, n:"Warme Chocolademelk", label:"WARME<br>CHOCOLADEMELK", p:4.25, bg:"purple"}, {c:1, spacer:true}, {c:1, spacer:true},
        // R4: Slagroom onder Warme Choco (Kolom 4)
        {c:1, spacer:true}, {c:1, spacer:true}, {c:1, spacer:true}, {c:1, n:"Slagroom", p:0.75, bg:"pink"}, {c:1, spacer:true}, {c:1, spacer:true},
        // R5: Frisdrank
        {c:1, n:"Cola", p:3.75, bg:"blue"}, {c:1, n:"Cola Zero", p:3.75, bg:"blue"}, {c:1, n:"Lemonaid Passion", label:"LEMONAID<br>PASSION", p:4.95, bg:"cyan"}, {c:1, n:"Lemonaid Blood Orange", label:"LEMONAID<br>BLOOD ORANGE", p:4.95, bg:"cyan"}, {c:1, n:"Lemonaid Ginger", label:"LEMONAID<br>GINGER", p:4.95, bg:"cyan"}, {c:1, n:"Chari Tea Green", label:"CHARI TEA<br>GREEN", p:4.95, bg:"cyan"},
        // R6: Spa / Sappen
        {c:1, n:"Chaudf. Blauw", label:"CHAUDF.<br>BLAUW", p:3.75, bg:"blue"}, {c:1, n:"Chaudf. Rood", label:"CHAUDF.<br>ROOD", p:3.75, bg:"red"}, {c:1, n:"Glas Limonade", label:"GLAS<br>LIMONADE", p:1.50, bg:"pink"}, {c:1, spacer:true}, {c:1, spacer:true}, {c:1, spacer:true},
        // R7: Sappen & Zuivel met witregels
        {c:1, n:"Schulp Appelsap", label:"SCHULP<br>APPELSAP", p:4.00, bg:"green"}, {c:1, n:"Schulp Appel Vlierbessen", label:"SCHULP APPEL<br>VLIERBESSEN", p:4.00, bg:"green"}, {c:1, spacer:true}, {c:1, spacer:true}, {c:1, n:"Verse jus D'orange", label:"VERSE JUS<br>D'ORANGE", p:5.25, bg:"orange"}, {c:1, n:"Sinaasappel Aardbei Sap", label:"SINAASAPPEL<br>AARDBEI SAP", p:5.25, bg:"orange"},
        // R8: Zuivel
        {c:1, n:"Chocomel", p:3.75, bg:"red"}, {c:1, spacer:true}, {c:1, n:"Melk", p:3.25, bg:"cyan"}, {c:1, n:"Karnemelk", p:3.25, bg:"red"}, {c:1, spacer:true}, {c:1, spacer:true},
        
        // --- CATEGORIE 2: ALCOHOL ---
        // R1
        {c:2, n:"Hertog Jan 0.0", label:"HERTOG JAN<br>0.0", p:4.00, bg:"yellow"}, {c:2, n:"Leffe 0.0", label:"LEFFE<br>0.0", p:5.50, bg:"orange"}, {c:2, spacer:true}, {c:2, spacer:true}, {c:2, spacer:true}, {c:2, spacer:true},
        // R2
        {c:2, n:"Hertog Jan", label:"HERTOG<br>JAN", p:4.00, bg:"yellow"}, {c:2, spacer:true}, {c:2, spacer:true}, {c:2, spacer:true}, {c:2, spacer:true}, {c:2, spacer:true},
        // R3
        {c:2, n:"Glas Paruda Pinot Grigio", label:"GLAS PARUDA<br>PINOT GRIGIO", p:5.50, bg:"white"}, {c:2, n:"Glas Shiraz", label:"GLAS<br>SHIRAZ", p:5.50, bg:"red"}, {c:2, n:"Glas Rose", label:"GLAS<br>ROSE", p:5.50, bg:"pink"}, {c:2, spacer:true}, {c:2, spacer:true}, {c:2, spacer:true},
        
        // --- CATEGORIE 3: ZOETIGHEDEN ---
        // R1: Gebak
        {c:3, n:"Dudok Appelgebak", label:"DUDOK<br>APPELGEBAK", p:5.75, bg:"darkred"}, {c:3, n:"Dudok Red Velvet", label:"DUDOK RED<br>VELVET", p:5.75, bg:"darkred"}, {c:3, n:"Citroen Meringue", label:"CITROEN<br>MERINGUE", p:5.75, bg:"darkred"}, {c:3, n:"Dubai Vanille", label:"DUBAI<br>VANILLE", p:5.75, bg:"darkred"}, {c:3, n:"Black velvet", label:"BLACK<br>VELVET", p:5.75, bg:"darkred"}, {c:3, n:"Vegan Glutenvrij Gebak", label:"VEGAN<br>GLUTENVRIJ GEBAK", p:5.50, bg:"lightblue"},
        // R2: Slagroom onder Appelgebak
        {c:3, n:"Slagroom", p:0.75, bg:"pink"}, {c:3, spacer:true}, {c:3, spacer:true}, {c:3, spacer:true}, {c:3, spacer:true}, {c:3, spacer:true},
        // R3: Broodjes
        {c:3, n:"Chocoladebroodje", label:"CHOCOLADE<br>BROODJE", p:3.75, bg:"olive"}, {c:3, n:"Croissant Boter & Jam", label:"CROISSANT<br>BOTER & JAM", p:3.75, bg:"olive"}, {c:3, spacer:true}, {c:3, spacer:true}, {c:3, spacer:true}, {c:3, spacer:true},
        // R4: Snacks
        {c:3, n:"Muffin", p:3.50, bg:"magenta"}, {c:3, n:"Donut", p:3.50, bg:"magenta"}, {c:3, n:"Kinderdonut", p:3.50, bg:"magenta"}, {c:3, n:"Aardbeien ijsje", label:"AARDBEIEN<br>IJSJE", p:2.50, bg:"cyan"}, {c:3, n:"Los fruit", label:"LOS<br>FRUIT", p:2.00, bg:"darkgreen"}, {c:3, spacer:true},
        // R5: Chips etc
        {c:3, n:"Tony's Chocoloney", label:"TONY'S<br>CHOCOLONEY", p:2.75, bg:"yellow"}, {c:3, n:"Popcorn", p:2.75, bg:"yellow"}, {c:3, n:"Zakje Chips", label:"ZAKJE<br>CHIPS", p:2.75, bg:"yellow"}, {c:3, spacer:true}, {c:3, spacer:true}, {c:3, spacer:true},
        
        // --- CATEGORIE 4: BROODJES / SOEP ---
        // R1
        {c:4, n:"Focaccia Caprese", label:"FOCACCIA<br>CAPRESE", p:10.95, bg:"brightgreen"}, {c:4, n:"Focaccia Tonijn", label:"FOCACCIA<br>TONIJN", p:10.95, bg:"brightgreen"}, {c:4, n:"Focaccia Gegrilde Groenten", label:"FOCACCIA<br>GEGRILDE<br>GROENTEN", p:10.95, bg:"brightgreen"}, {c:4, n:"Focaccia Prosciutto", label:"FOCACCIA<br>PROSCIUTTO", p:10.95, bg:"brightgreen"}, {c:4, spacer:true}, {c:4, spacer:true},
        // R2
        {c:4, n:"Salade Caprese", label:"SALADE<br>CAPRESE", p:13.00, bg:"brightgreen"}, {c:4, n:"Salade Tonijn", label:"SALADE<br>TONIJN", p:13.00, bg:"brightgreen"}, {c:4, spacer:true}, {c:4, spacer:true}, {c:4, spacer:true}, {c:4, spacer:true},
        // R3
        {c:4, n:"Kaasbroodje Vega", label:"KAASBROODJE<br>VEGA", p:3.95, bg:"orange"}, {c:4, n:"Saucijzenbroodje Vega", label:"SAUCIJZENBROODJE<br>VEGA", p:3.95, bg:"orange"}, {c:4, n:"Quiche Vega", label:"QUICHE<br>VEGA", p:4.25, bg:"orange"}, {c:4, n:"Soep & Soepbroodje", label:"SOEP &<br>SOEPBROODJE", p:7.25, bg:"orange"}, {c:4, n:"Soep broodje Los", label:"SOEP BROODJE<br>LOS", p:0.75, bg:"orange"}, {c:4, n:"Broodje hotdog", label:"BROODJE<br>HOTDOG", p:4.50, bg:"orange"},
        
        // --- CATEGORIE 5: DIVERSEN ---
        {c:5, n:"Diversen 9%", p:0, special:true, bg:"red"}, {c:5, n:"Diversen 21%", p:0, special:true, bg:"red"}
    ]
};