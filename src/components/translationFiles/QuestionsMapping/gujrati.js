const gujrati= {
  Section1: {
    // "1.1": {
    //   "number": 1.1,
    //   "question": "શહેરનું નામ",
    //   "type": "input",
    //   "section": "A: સેક્શન 1: ક્લાયન્ટ પૃષ્ઠભૂમિ",
    //   "inputType": "text"
    // },
    "1.2": {
      "number": 1.2,
      "question": "ક્લિનિકની મુલાકાત લીધી",
      "type": "input",
      "inputType": "text"
    },
    // "1.3": {
    //   "number": 1.3,
    //   "question": "મુલાકાતની તારીખ",
    //   "type": "input",
    //   "inputType": "date"
    // },
    // "1.4": {
    //   "number": 1.4,
    //   "question": "ઈન્ટરવ્યુઅરનું નામ",
    //   "type": "input",
    //   "inputType": "text"
    // },
    "1.5": {
      "number": 1.5,
      "question": "મુલાકાતનો હેતુ",
      type: "radio",
      "options": [
       
        {
          "label": "સામાન્ય સારવાર (ફ્લૂ, ઉધરસ, શરદી, તાવ)",
          "code": "1"
        },
        {
          "label": "બ્લડ/સ્પુટમ ટેસ્ટિંગ",
          "code": "2"
        },
        {
          "label": "આય ટેસ્ટિંગ",
          "code": "3"
        },
        {
          "label": "અન્ય (જણાવો)",
          "code": "4"
        }
      ]
    },
    "B1. ": {
      "number": "B1. ",
      "question": "શું વેઈટીંગ વિસ્તાર સ્વચ્છ અને સારી રીતે જાલવેલો છે?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ],
      "section": "B: સેક્શન 2: સુવિધા અને ઈન્ફ્રાસ્ટ્રક્ચર"
    },
    "B2.": {
      "number": "B2.",
      "question": "શું સામાન્ય સુવિધાઓ (ટોઇલેટ, વૉશબેસિન, વગેરે) કાર્યાત્મક અને સ્વચ્છ છે?        ",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "B3.": {
      "number": "B3.",
      "question": "શું પાણીની પૂરતી સુવિધા છે?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "B4.": {
      "number": "B4.",
      "question": "શું બધા મુલાકાતીઓ માટે સરળતાથી સમજવા માટે સાઈન બોર્ડ છે?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "B5.": {
      "number": "B5.",
      "question": "શું આરોગ્ય-સંબંધિત માહિતીનું મટીરીયલ (દા.ત., એચઆઈવી/એઈડ્ઝ, ડાયાબિટીસ પરના પોસ્ટરો) ડિસપ્લે કરેલા છે?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "B6.": {
      "number": "B6.",
      "question": "શું વેઇટિંગ એરિયામાં દર્દીઓ માટે પૂરતું સીટીંગ છે?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "C1.": {
      "number": "C1.",
      "question": "ક્લિનિકમાં પ્રવેશ કરતી વખતે તમે કઈ પ્રથમ પ્રક્રિયામાંથી પસાર થયા હતા? (દા.ત., શુભેચ્છા, કાઉન્ટર પર રજીસ્ટ્રેશન)",
      "type": "input",
      "options": [
        {
          "label": "10 મિનિટથી ઓછું",
          "code": "1"
        },
        {
          "label": "10-15 મિનિટ",
          "code": "2"
        },
        {
          "label": "15-30 મિનિટ",
          "code": "3"
        }
      ],
      "section": "C: સેક્શન 3: રજીસ્ટ્રેશન અને વાતચીત/સંપર્ક",
      "inputType": "text",
      "label": "અવલોકન/વિગતવાર"
    },
    "C2.": {
      "number": "C2.",
      "question": "રજીસ્ટ્રેશન પ્રક્રિયા દરમિયાન સ્ટાફ વિનમ્ર હતો?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        },
        {
          "label": "ધ્યાન આપ્યું નથી",
          "code": "3"
        }
      ]
    },
    "C3.": {
      "number": "C3.",
      "question": "રિસેપ્શન પર જતા પહેલાં તમારે કેટલો સમય રાહ જોવી પડી?",
      "type": "radio",
      "options": [
        {
          "label": "10 મિનિટથી ઓછું",
          "code": "1"
        },
        {
          "label": "10-15 મિનિટ",
          "code": "2"
        },
        {
          "label": "15-30 મિનિટ",
          "code": "3"
        },
        {
          "label": "30 મિનિટથી વધારે",
          "code": "4"
        }
      ]
    },
    "E1.": {
      "number": "E1.",
      "question": "શું તમારી ડૉક્ટર દ્વારા તપાસ કરવામાં આવી હતી?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ],
      "section": "D સેક્શન 5: ડૉક્ટરનું એકઝામીન/તપાસઅને નિદાન"
    },
    "E2.": {
      "number": "E2.",
      "question": "શું ડૉક્ટરે તમારી શારીરિક તપાસ કરી હતી?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "E3.": {
      "number": "E3.",
      "question": "શું ડૉક્ટરે ગોપનીયતાની ખાતરી આપી હતી?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "E4.": {
      "number": "E4.",
      "question": "શું ડૉક્ટરે તપાસ શરૂ કરતા પહેલા રેપો બનાવ્યો હતો?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "E5.": {
      "number": "E5.",
      "question": "શું ડોકટરે તપાસ દરમિયાન ગ્લ્વોઝનો ઉપયોગ કર્યો હતો?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "E6.": {
      "number": "E6.",
      "question": "શું ડૉક્ટરે સ્ટરીલાઈઝડ સાધનોનો ઉપયોગ કર્યો હતો?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "E7.": {
      "number": "E7.",
      "question": "શું ડૉક્ટરની ચર્ચા સમજી શકાય તેવી હતી?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "E8.": {
      "number": "E8.",
      "question": "ચર્ચા દરમિયાન, શું તમને તમારી શંકા/સવાલો વિશે પૂછવાની તક આપવામાં આવી હતી?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "E9.": {
      "number": "E9.",
      "question": "શું ડૉક્ટર તમારા સવાલો/શંકાઓના જવાબ (અથવા સ્પષ્ટતા) આપવામાં સક્ષમ હતા?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "E10.": {
      "number": "E10.",
      "question": "શું તમે ડૉક્ટર સાથેની ચર્ચા સમજી શક્યા હતા?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "E12": {
      "number": "E12",
      "question": "એકંદરે, તમે ડૉક્ટરના વર્તનને કેવી રીતે રેટ કરશો?",
      "type": "radio",
      "options": [
        {
          "label": "શાંતિથી અને સંપૂર્ણ",
          "code": "1"
        },
        {
          "label": "ઉતાવળમાં અને સુપરફિસિયલ",
          "code": "2"
        },
        {
          "label": "અસભ્ય અને બેદરકારી",
          "code": "3"
        }
      ]
    },
    "E14": {
      "number": "E14",
      "question": "ડૉક્ટરે તમારી સાથે વિતાવેલો અંદાજિત સમય (મિનિટમાં)?",
      "type": "radio",
      "options": [
        {
          "label": "10 મિનિટથી ઓછું",
          "code": "1"
        },
        {
          "label": "10-15 મિનિટ",
          "code": "2"
        },
        {
          "label": "15-30 મિનિટ",
          "code": "3"
        },
        {
          "label": "30 મિનિટથી વધારે",
          "code": "4"
        }
      ]
    },
    "E15.": {
      "number": "E15.",
      "question": "તમને આપવામાં આવેલ કાઉન્સેલિંગ/તપાસ/નિદાનની ગુણવત્તાના સંદર્ભમાં તમે ડૉક્ટરને કેવી રીતે રેટ કરશો?",
      "type": "radio",
      "options": [
        {
          "label": "ખૂબજ સંતુષ્ટ",
          "code": "1"
        },
        {
          "label": "સંતુષ્ટ",
          "code": "2"
        },
        {
          "label": "તટસ્થ",
          "code": "3"
        },
        {
          "label": "અસંતુષ્ટ",
          "code": "4"
        },
        {
          "label": "ખૂબજ અસંતુષ્ટ",
          "code": "5"
        }
      ] , 
      checkAsk:true,
     nextStep:7
    },
    F:{
      number:"F",
      question:": Vision Care (If Applicable)",
      type:"rate",
      STATEMENTS:[
        {label:"શું તમે આઇ ક્લિનિકની મુલાકાત લીધી હતી.", "id":"F1."},
        {label:"શું ડૉક્ટર દ્વારા તમારી શારીરિક તપાસ કરવામાં આવી હતી?", "id":"F2."},
        {label: "શું  આંખોની દૃષ્ટિને તપાસવામાં આવી હતી?","id":"F3."},
        {label:"WWas the eye doctor’s discussion understandable?", "id":"F4."},
        {label:" શું ડૉક્ટરે તપાસ/એકઝામીન શરૂ કરતા પહેલા તાલમેલ બનાવ્યો હતો?","id":"F5."},
        {label:"શું ડોકટરે તપાસ દરમિયાન ગ્લોવ્ઝનો ઉપયોગ કર્યો હતો?","id":"F6."},
        {label:"શું ડૉક્ટરે સ્ટરીલાઈઝડ સાધનોનો ઉપયોગ કર્યો હતો?", "id":"F7."},
      ],
      FREQUENCIES: [
        {label:"હા",value:"1" },
        {label:"ના",value:"2"}
      ],
          
    },
    "F9A": {
      "number": "F9A",
      "question": "તપાસ કર્યા પછી શું ભલામણ કરવામાં આવી હતી? શું \"આઇ ડ્રોપ\" તેમાંથી એક છે?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "F9B": {
      "number": "F9B",
      "question": "તપાસ કર્યા પછી શું ભલામણ કરવામાં આવી હતી? શું સર્જરી તેમાંથી એક છે?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "F9C": {
      "number": "F9C",
      "question": "તપાસ કર્યા પછી શું ભલામણ કરવામાં આવી હતી? શું તેમાંથી એક \"સારવારની જરૂર નથી\" છે?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "F9D": {
      "number": "F9D",
      "question": "તપાસ કર્યા પછી શું ભલામણ કરવામાં આવી હતી? તે એવું કંઈક છે, હજુ સુધી પૂછ્યું નથી (અન્ય)?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "F9E": {
      "number": "F9E",
      "question": "તપાસ કર્યા પછી શું ભલામણ કરવામાં આવી હતી? કૃપા કરી જણાવો",
      "type": "input"
    },  "gujE14": {
      "number": "E14F",
      "question": "ડૉક્ટરે તમારી સાથે વિતાવેલો અંદાજિત સમય (મિનિટમાં)?",
      "type": "radio",
      "options": [
        {
          "label": "10 મિનિટથી ઓછું",
          "code": "1"
        },
        {
          "label": "10-15 મિનિટ",
          "code": "2"
        },
        {
          "label": "15-30 મિનિટ",
          "code": "3"
        },
        {
          "label": "30 મિનિટથી વધારે",
          "code": "4"
        }
      ]
    },
    "gujE15.": {
      "number": "E15F.",
      "question": "તમને આપવામાં આવેલ કાઉન્સેલિંગ/તપાસ/નિદાનની ગુણવત્તાના સંદર્ભમાં તમે ડૉક્ટરને કેવી રીતે રેટ કરશો?",
      "type": "radio",
      "options": [
        {
          "label": "ખૂબજ સંતુષ્ટ",
          "code": "1"
        },
        {
          "label": "સંતુષ્ટ",
          "code": "2"
        },
        {
          "label": "તટસ્થ",
          "code": "3"
        },
        {
          "label": "અસંતુષ્ટ",
          "code": "4"
        },
        {
          "label": "ખૂબજ અસંતુષ્ટ",
          "code": "5"
        }
      ],
      checkAsk:true,
      nextStep:9
    },
    "G1.": {
      "number": "G1.",
      "question": "શું તમને બ્લડ ટેસ્ટિંગ અથવા સ્પુટમ કલેક્શન માટે પ્રિસ્કાઇબ કરવામાં આવ્યું હતું?",
      "type": "radio",
      "options": [
        {
          "label": "બ્લડ ટેસ્ટિંગ પ્રિસ્કાઇબ કર્યું",
          "code": "1"
        },
        {
          "label": "સ્પુટમ કલેક્શન પ્રિસ્કાઇબ ક",
          "code": "2"
        },
        {
          "label": "ના",
          "code": "3"
        }
      ],
      "section": "G: બ્લડ અને સ્પુટમનું ટેસ્ટિંગ (જો લાગુ પડતું હોય તો)"
    },
    "G2. ": {
      "number": "G2.",
      "question": "જો હા, તો શું તમે બ્લડ ટેસ્ટિંગ અથવા સ્પુટમ કલેક્શન વિભાગની મુલાકાત લીધી હતી?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "G3.": {
      "number": "G3.",
      "question": "શું ક્લિનિકમાં લેબ ટેસ્ટિંગ માટે ખાનગી વિસ્તાર હતો?હા(1), ના(2)",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "G4.": {
      "number": "G4.",
      "question": "શું લેબ ટેકનિશિયને જ્યારે લોહી લીધું હતું ત્યારે તેણે ગ્લોવ્ઝ પહેર્યા હતા?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "G5.": {
      "number": "G5.",
      "question": "શું લેબ ટેકનિશિયને તમારી પાસેથી લોહી લેતી વખતે / સ્પુટમ એકત્રિત કરતી વખતે માસ્ક પહેર્યો હતો?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "G6.": {
      "number": "G6.",
      "question": "ફાર્માસિસ્ટ/લેબ ટેકનિશિયનનું એકંદરે વર્તન કેવું હતું?",
      "type": "radio",
      "options": [
        {
          "label": "શાંતિથી બધુંજ બરાબર સમજાવ્યું",
          "code": "1"
        },
        {
          "label": "ઉતાવળમાં હતી",
          "code": "2"
        },
        {
          "label": "અસભ્ય અને સમજાવ્યું નહીં",
          "code": "3"
        }
      ]
    },
    "G7.": {
      "number": "G7.",
      "question": "બ્લડ ટેસ્ટિંગ પ્રક્રિયામાં કેટલો સમય લાગ્યો હતો?",
      "type": "radio",
      "options": [
        {
          "label": "10 મિનિટથી ઓછું",
          "code": "1"
        },
        {
          "label": "10-15 મિનિટ",
          "code": "2"
        },
        {
          "label": "15-30 મિનિટ",
          "code": "3"
        },
        {
          "label": "30 મિનિટથી વધારે",
          "code": "4"
        }
      ]
    },
    "G8.": {
      "number": "G8.",
      "question": "શું ટેસ્ટિંગનું પરિણામ તમને લેબ ટેકનિશિયન દ્વારા જાહેર કરવામાં આવ્યું હતું?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        },
        {
          "label": "ડૉક્ટરને રીફર કર્યા",
          "code": "3"
        },
        {
          "label": "કાઉન્સેલરને રીફર કર્યા",
          "code": "4"
        },
        {
          "label": "પછીથી આવવા કહ્યું",
          "code": "5"
        }
      ]
    },
    "H1": {
      "number": "H1",
      "question": "શું ફાર્માસિસ્ટે દવાઓનો ડોઝ અને ઉપયોગ સમજાવ્યો હતો?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ],
      "section": "H: દવા આપવી"
    },
    "H2": {
      "number": "H2",
      "question": " શું ફાર્માસિસ્ટે ગ્લોવ્ઝ પહેર્યા હતા?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "H3": {
      "number": "H3",
      "question": "શું ફાર્માસિસ્ટ માસ્ક પહેરેલો હતો?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "H4": {
      "number": "H4",
      "question": " શું બધી પ્રિસ્કાઇબ કરેલી દવાઓ ઉપલબ્ધ હતી?",
      "type": "radio",
      "options": [
        {
          "label": "હા",
          "code": "1"
        },
        {
          "label": "ના",
          "code": "2"
        }
      ]
    },
    "H5": {
      "number": "H5",
      "question": " તમને શું કરવાની સૂચના આપવામાં આવી હતી?",
      "type": "radio",
      "options": [
        {
          "label": "પછીથી આવવા કહ્યું",
          "code": "1"
        },
        {
          "label": "બહારથી ખરીદી",
          "code": "2"
        },
        {
          "label": "કોઈ સૂચનાઓ આપી નથી",
          "code": "3"
        },
        {
          "label": "લાગુ પડતું નથી",
          "code": "4"
        }
      ]
    },
    "H6": {
      "number": "H6",
      "question": "એકંદરે, તમે ફાર્માસિસ્ટના વર્તનને કેવી રીતે રેટ કરશો?",
      "type": "radio",
      "options": [
        {
          "label": "શાંતિથી અને સંપૂર્ણ",
          "code": "1"
        },
        {
          "label": "ઉતાવળમાં અને સુપરફિસિયલ",
          "code": "2"
        },
        {
          "label": "અસભ્ય અને બેદરકારી",
          "code": "3"
        }
      ]
    },
    "I": {
      "number": "I",
      "question": "કુટુંબ સાથેની એકંદરે સંતુષ્ટિને રેટ કરો",
      "type": "rate",
      "section": "I: સેક્શન 7: સુવિધા અને સેવાઓ સાથે એકંદરે સંતુષ્ટિ",
      "STATEMENTS": [
        {
          "label": "રજીસ્ટ્રેશન સેવા",
          "id": "I1"
        },
        {
          "label": "ડૉક્ટરની તપાસ/એકઝામીન",
          "id": "I2"
        },
        {
          "label": "વિઝન કેર",
          "id": "I3"
        },
        {
          "label": "લેબ સેવાઓ",
          "id": "I4"
        },
        {
          "label": "સાફ-સુથરું અને સ્વચ્છતા",
          "id": "I5"
        },
        {
          "label": "સ્ટાફની વર્તણૂક",
          "id": "I6"
        }
      ],
      "FREQUENCIES": [
        {
          "label": "ખૂબજ ખરાબ",
          "value": "1"
        },
        {
          "label": "ખરાબ",
          "value": "2"
        },
        {
          "label": "સરેરાશ",
          "value": "3"
        },
        {
          "label": "સારું",
          "value": "4"
        },
        {
          "label": "ખૂબજ સારું",
          "value": "5"
        },
        {
          "label": "લાગુ પડતું નથી",
          "value": "8"
        }
      ]
    }
  }
}
  export default gujrati
