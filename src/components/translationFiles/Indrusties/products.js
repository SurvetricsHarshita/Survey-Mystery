



const products = {
  Section1: {
    QA: {
      question: "FW CENTER DETAILS ",
      response: " ",
      options: [
        { label: "Indore", code: "1" },
        { label: "Lucknow", code: "2" },
        { label: "Guwahati", code: "3" }
      ],
      first: true,
      number: "f1",

      type: "radio",
      // audio: true
      autoCodeQuestion:true,
      autoCodeQuestionVar:"f1a",
      codes: {
        "1": { save: "urban" },
        "2": { save: "semi-urban" },
        "3": { save: "rural" }
      }
    },
    QB: {
      question: "Area classification  ",
      response: " ",
      options: [
        { label: "Urban", code: "1" },
        { label: "Semi urban", code: "2" },
      
      ],
    
    

      number: "f2",
      type: "radio",

      // if user selec the 2 on f1 then do not render this auto it to localstoarge
      // audio: true

    },
    Q1: {
      number: "S1",
      question: "Please ask for the lady of the house,who should be the decision maker for purchase of  HH grocery and personal care products",
      //CODE BY OBSERVATION AND CONTINUE
      type: "radio",

      
      options: [
        { label: "Female", code: "1" },
        { label: "Male", code: "2" },
      
      ],
      termination: true,

      terminationCodes: [ "2" ]
      ,
      // audio: true
    },
    // QDisplay: {
    //   number: "S1",

    //   //CODE BY OBSERVATION AND CONTINUE
    //   type: "Quota",

    
    // },
    //? MATRIX QUESTION:
    Q2: {
      question: "Do you or any of your family members work in the following industries?",
      response: "",
      number: "S2",
      termination: true,
      options: [ { label: "Marketing", code: "1" },
        { label: "Marketing / Market Research (agency and including a market research department within an organization)", code: "2" },
        { label: "Advertising / PR Agency", code: "3" },
        { label: "Journalism / Print (Newspaper / Magazine)", code: "4" },
        { label: "Working in Retail shop/ Kirana Shop/Medical Stores/Department stores", code: "5" },
        { label: "Working in FMCG / Retail company / personal grooming products Industry / Personal grooming products Distribution company", code: "6" },
        { label: "None of the above", code: "99" } ],
      type: "radio",
      terminationCodes: [ "1", "2", "3", "4", "5", "6" ],
      // audio: true
      optionsRemove:["2","5"],
      optionsDependOn:[{
        question:"S1",options:["1"],
       
      },{ question:"f1",options:["2","1"]}],
      randomize:true,
      fixedCodes:["99"],
      RandomizeOnce:true
      // show first options "marketing if 1 coded in s1"
    },
    Q3: {
      number: "S3",
      question: "What is your current marital status ? ",
      //CODE BY OBSERVATION AND CONTINUE
      type: "radio",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //matrix , dropdown(single) , dropdown(multi) , rate , scale , upload )
      placeHolder: "",
      label: "",
      options: [ { label: "Married", code: "1" },
        { label: "Single / Widow / Divorce", code: "2" } // //todo Single /Widow/Divorce = terminate
      ],
      terminationCodes: [ "2" ],
      termination: true,
      audio: true,
      randomize:true,
      RandomizeOnce:true
    },
    Q4: {
      number: "S4a",
      question: "Do you take  purchase decision for brands of personal skin  care products that are used in the household such as bathing soaps, body wash,  face creams and lotions etc ?  ",
      type: "radio",
      placeHolder: "",
      label: "",
      options: [ { label: "Yes", code: "1" },
        { label: "No", code: "2" } 
      ],
      audio: true,


      terminationCodes: [ "2" ],
      termination: true,
      randomize:true,
    
      // RandomizeOnce:true
    },
    Q5: {
      number: "S4b",
      question: "Have you participated in any market research surveys related to Personal Care category in the past THREE (3) months?",

      type: "radio",
      placeHolder: "",
      label: "",
      options: [  { label: "Yes", code: "1" },
        { label: "No", code: "2" } ,
        // {label: "Others (please specify)", code: "99"}
      ],

      termination: true, //true or false 
      terminationCodes: [ "1" ],

    },
    Q6: {
      number: "S4c",
      question: "Can you please tell me your age in completed years? ",

      type: "input",
      placeHolder: "NOTE DOWN AGE IN YEARS",
      label: "(RECORD AGE IN YEARS)",
      inputType: "number",
      inputLimit:3,
   
      termination: true, //true or false 
    },
     
  
    Q7: {
      number: "S5a",
      question: "Could you please tell me the education of the Chief Wage Earner of your household? By Chief Wage Earner, I refer to the person who contributes the maximum to your household expenditure?  ",

      type: "radio",
      placeHolder: "",
      label: "",
      options: [   { label: "Illiterate", code: "1" },
        { label: "Literate, but no school", code: "2" },
        { label: "School (up to 4 years)", code: "3" },
        { label: "School (5 to 9 years)", code: "4" },
        { label: "School (10+ years (HSC))", code: "5" },
        { label: "HSC+, but not graduate", code: "6" },
        { label: "Graduate / Post Grad-Gen", code: "7" },
        { label: "Graduate / Post Grad-Prof", code: "8" }
      ],


    },
    Q8: {
      number: "S6a",
      question: "Please look at this list and tell me which of these items do you have at home? (It could be owned by you, your family, or provided by the employer or it could be available in the house you live in; but it should be for the use of just you or your family) EXPLAIN, IF NECESSARY: We have a standard list of items that we use in all kind of cities and villages. So, don’t worry if any item appears irrelevant for you or too ordinary, just go ahead and tell me which items you do have. We need this information for survey purpose only ",
      type: "multi",
      options: [  { label: "Electricity Connection", code: "1" },
        { label: "Ceiling Fan", code: "2" },
        { label: "LPG Stove", code: "3" },
        { label: "Two-Wheeler", code: "4" },
        { label: "Colour TV", code: "5" },
        { label: "Refrigerator", code: "6" },
        { label: "Washing Machine", code: "7" },
        { label: "Personal Computer / Laptop", code: "8" },
        { label: "Car / Jeep / Van", code: "9" },
        { label: "Air Conditioner", code: "10" },
        { label: "Others (please specify)", code: "99" }

      ],
      response: " ",
      maxSelections: 3,
    
      optionsDependOn:[{
        question:"S1",options:["1"],
       
      }],
      optionsRemove:["4"],
      randomize:true,
      fixedCodes:["99"],
      RandomizeOnce:true
      // dont not show two wheeler if coded 1 in s1
    },

    Q9: {
      number: "S6b",
      question: "Does your family own any agricultural land, by agricultural land I mean land that is currently under cultivation or plantation? ",

      type: "radio",
      placeHolder: "agricultural land",
      label: "",
      options: [  { label: "Yes", code: "1" },
        { label: "No", code: "2" }
      ],
  

    },


    Q10: {
      number: "S7b",
      question: "Have a look at the options and tell me which all beauty products  for personal skin care  are you using in your household ? ",

      type: "multi",
      placeHolder: "",
      label: "",
      options: [
        { label: "Bathing soap bar", code: "1" },
        { label: "Body wash", code: "2" },
        { label: "Beauty cream like Nivea, Charmis etc", code: "3" },
        { label: "Body lotion", code: "4" },
        { label: "Body Scrubber", code: "5" },
        { label: "Sun Screen lotion", code: "6" },
        { label: "None of the above", code: "99" },
        { label: "Others (please specify)", code: "8" }
      ],



      termination: true,

      terminationCodes: [ "2", "3", "4", "5", "6", "7" ]
    },

    Q11: {
      number: "S7c",
      question: "Do you use more than one bathing soap bar in your household ?",

      type: "radio",
      placeHolder: "",
      label: "",
      options: [ { label: "Only one soap that is used by everybody", code: "1" },
        { label: "Only one soap that is used by only me", code: "2" },
        { label: "Everybody in the family uses their own individual soap", code: "3" } ],


    },
    Q12: {
      number: "S7d",
      question: "How many members in the family do you have . By this I mean the people who are living in this house with you ?SINGLE ",

      type: "radio",
      placeHolder: "",
      label: "",
      options: [  { label: "Me and my husband", code: "1" },
        { label: "Me and my husband and our one child", code: "2" },
        { label: "Me and my husband and our two children", code: "3" },
        { label: "Me and my husband and our three children", code: "4" },
        { label: "Me and my husband, our children and other relatives", code: "5" } ],

    },

    // doubt
    Q13: {
      number: "S7e_Total ",
      question: "Total  number of members living in the family",

      type: "",
      placeHolder: "",
      label: "",
      options: [ "Number of children",
        "Number of adults"
      ],
      maxLength: 3,
      inputType: "number"

    },
    Q13c: {
      number: "S7e_children",
      question: "Total  number of Number of children living in the family",
      type: "",
      placeHolder: "",
      label: "Number of children",
      options: [ "Number of children",
        "Number of adults"

      ],
      inputType: "number"

    }, Q13a: {
      number: "S7e_adults",
      question: "Total  number of adults living in the family",

      type: "",
      placeHolder: "",
      label: "Number of adults",
      options: [ "Number of children",
        "Number of adults"
      ],

      inputType: "number"
    },
    Q14: {
      number: "S7f",
      question: "How often do you purchase soap? ",

      type: "radio",
      placeHolder: "",
      label: "",
      options: [  { label: "Once a month", code: "1" },
        { label: "Once in fifteen days", code: "2" },
        { label: "Once in two months", code: "3" },
        { label: "Less often", code: "4" }
      ],

    },
    Q15: {
      number: "S7g",
      question: "What is the pack size?  ",

      type: "radio",
      placeHolder: "",
      label: "",
      options: [  { label: "	Less that 50 gms", code: "1" },
        { label: "50-75 gms", code: "2" },
        { label: "75gms but <100 gms", code: "3" },
        { label: "100 gms", code: "4" },
        { label: "More than 100 gms", code: "5" }
      ],


      terminationCodes: [ "1", "2", "3" ],
      termination: true,


    },
    Q16: {
      number: "S7h",
      question: "How long is your bathing ritual?",
      type: "radio",
      placeHolder: "",
      label: "",
      options: [  { label: "Less than 5 minutes", code: "1" },
        { label: "5 to 10 minutes", code: "2" },
        { label: "10 to 15 minutes", code: "3" },
        { label: "More than 15 minutes", code: "4" }
      ],



    },

    Q17: {
      number: "S8a",
      question: "Whenever you think of bathing soap bars which brand comes to your mind first? NEED A FULL LIST OF BRANDS OF BATHING SOAPS FROM THE CLIENT",
      type: "radio",
      options: [ { label: "Cinthol", code: "1" },
        { label: "Dove", code: "2" },
        { label: "Dyna", code: "3" },
        { label: "Fiam", code: "4" },
        { label: "Famus", code: "5" },
        { label: "Godrej number 1", code: "6" },
        { label: "Jo", code: "7" },
        { label: "Khadee", code: "8" },
        { label: "Lux", code: "9" },
        { label: "Liril", code: "10" },
        { label: "Medimix", code: "11" },
        { label: "Margo", code: "12" },
        { label: "Moti", code: "13" },
        { label: "Mysore sandal soap", code: "14" }
      ],
      response: " "
    },
    //todo  need to append the list of brands user added in the below question
    Q18: {
      number: "S8b_brand1",
      question: "Which  are the other brands that come to your mind… AND NEXT…. AND NEXT… AND NEXT (PROBE THREE TIMES)? ",
      type: "",
      label: "Brand-1"



    },
    Q18brand2: {
      number: "S8b_brand2",
      question: "Which  are the other brands that come to your mind… AND NEXT…. AND NEXT… AND NEXT (PROBE THREE TIMES)? ",
      type: "input",

      label: "Brand-2"

    },
    Q18brand3: {
      number: "S8b_brand3",
      question: "Which  are the other brands that come to your mind… AND NEXT…. AND NEXT… AND NEXT (PROBE THREE TIMES)? ",
      type: "input",
      label: "Brand-3"


    },
    Q19: {
      number: "S8c",
      question: "Here is a list of few more bathing soap bars. Which ALL bathing soap bars are you  AWARE  of?",
      type: "radio",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //? matrix , dropdown(single) , dropdown(multi) , rate , scale , upload )
      placeHolder: "",
      label: "",
      options: [ { label: "Cinthol", code: "1" },
        { label: "Dove", code: "2" },
        { label: "Dyna", code: "3" },
        { label: "Fiam", code: "4" },
        { label: "Famus", code: "5" },
        { label: "Godrej number 1", code: "6" },
        { label: "Jo", code: "7" },
        { label: "Khadee", code: "8" },
        { label: "Lux", code: "9" },
        { label: "Liril", code: "10" },
        { label: "Medimix", code: "11" },
        { label: "Margo", code: "12" },
        { label: "Moti", code: "13" },
        { label: "Mysore sandal soap", code: "14" }
      ],
      column: [ "Tom", "SPONTANEOUS", "Last 3 Months", "Currently using" ],



    },
    Q20: {
      number: "S9a",
      question: "Please have a look at this card and let me know which all  bathing soap bars you and your family have ever used ?",
      type: "multi",
      options: [ { label: "Cinthol", code: "1" },
        { label: "Dove", code: "2" },
        { label: "Dyna", code: "3" },
        { label: "Fiam", code: "4" },
        { label: "Famus", code: "5" },
        { label: "Godrej number 1", code: "6" },
        { label: "Jo", code: "7" },
        { label: "Khadee", code: "8" },
        { label: "Lux", code: "9" },
        { label: "Liril", code: "10" },
        { label: "Medimix", code: "11" },
        { label: "Margo", code: "12" },
        { label: "Moti", code: "13" },
        { label: "Mysore sandal soap", code: "14" }
      ],
      response: " "
    },
    Q21: {
      number: "S9b",
      question: "Please have a look at this card and let me know which all  bathing soap bars you and your family have in the last 1 Year ?",
      type: "multi",
      options: [ { label: "Cinthol", code: "1" },
        { label: "Dove", code: "2" },
        { label: "Dyna", code: "3" },
        { label: "Fiam", code: "4" },
        { label: "Famus", code: "5" },
        { label: "Godrej number 1", code: "6" },
        { label: "Jo", code: "7" },
        { label: "Khadee", code: "8" },
        { label: "Lux", code: "9" },
        { label: "Liril", code: "10" },
        { label: "Medimix", code: "11" },
        { label: "Margo", code: "12" },
        { label: "Moti", code: "13" },
        { label: "Mysore sandal soap", code: "14" }
      ],
      response: " "
    },
    Q22: {
      number: "S9c",
      question: "Which bathing soap bar are you and your family members  using most often in the last three months? ",
      type: "radio",
      options: [ { label: "Cinthol", code: "1" },
        { label: "Dove", code: "2" },
        { label: "Dyna", code: "3" },
        { label: "Fiam", code: "4" },
        { label: "Famus", code: "5" },
        { label: "Godrej number 1", code: "6" },
        { label: "Jo", code: "7" },
        { label: "Khadee", code: "8" },
        { label: "Lux", code: "9" },
        { label: "Liril", code: "10" },
        { label: "Medimix", code: "11" },
        { label: "Margo", code: "12" },
        { label: "Moti", code: "13" },
        { label: "Mysore sandal soap", code: "14" }
      ],
      response: " ",
      termination: true,
      terminationCodes: [ "1", "2", "3", "4", "5", "8", "9", "10", "11", "12", "13", "14" ]

    },
    Q23: {
      number: "S9d",
      question: "Which bathing soap bar are you and your family members are currently  using in the household? ",
      type: "radio",
      options: [ { label: "Cinthol", code: "1" },
        { label: "Dove", code: "2" },
        { label: "Dyna", code: "3" },
        { label: "Fiam", code: "4" },
        { label: "Famus", code: "5" },
        { label: "Godrej number 1", code: "6" },
        { label: "Jo", code: "7" },
        { label: "Khadee", code: "8" },
        { label: "Lux", code: "9" },
        { label: "Liril", code: "10" },
        { label: "Medimix", code: "11" },
        { label: "Margo", code: "12" },
        { label: "Moti", code: "13" },
        { label: "Mysore sandal soap", code: "14" }
      ],
      response: " ",
      // termination: true,
      // terminationCodes: []
    },
    Q24: {
      number: "S9e",
      question: "May I know  how often you change your brand of  bathing soap? ",
      type: "radio",
      placeHolder: "",
      label: "",
      options: [ { label: "Never change", code: "1" },
        { label: "Change infrequently, may be once in two to three years", code: "2" },
        { label: "Change frequently, every 1-2 years", code: "3" },
        { label: "Always change my brand of soap every year", code: "4" },
        { label: "Always change my brand of soap every six-three months", code: "5" },
        { label: "Always change my brand of soap every three-two months", code: "6" }

      ],
      checkAsk: true,

    },
    Q25: {
      number: "S9f",
      question: "Why do you change your soap so frequently? ",
      type: "multi",
      placeHolder: "",
      label: "",
      options: [           {label:"I like different fragrances  so I try a new fragrance", code:"1"},
        {label:"I like value for money bathing soaps so buy the inexpensive soap that is available  ", code:"2"},
        {label:"I like to try new brands", code:"3"},
        {label : "I like to change my brand when I want to feel different and I don’t like the same experience ", code:"4"},
       {label: "I like to change my brand of soap because my skin  starts showing a reaction if the so",code:"5"}

      ],
    },
    Q26: {
      number: "S9g",
      question: "May I know the fragrance of your current soap? ",
      type: "radio",
      placeHolder: "",
      label: "",
      options: [
        {label: "Jasmine" , code:"1"},
        {label : "Lemon " ,  code:"2"},
        {label:"Rose" , code:"3"},
        {label:"Sandalwood" , code:"4"},
      {label:"Milk/Cream/Saffron" , code:"5"},
      {label:"Woody/Aqua/ etc", code:"6"}, //todo terminate
       {label:"Mixed fragrance None of above" ,code:"7"} //todo terminate

      ],

      random: "false", //true or false
      //true or false
      terminationCodes: [ "5", "6", "7" ],
      termination: true, //true or false

    },
    Q27: {
      number: "S10a",
      question: "Are you willing to participate in such a study by using the soap sample that we leave with you for next 15 days? ",
      type: "radio",
      options: [ 
        {label:"Yes, i wish to participate", code:"1"} ,// todo continue only otherwise terminate
       {label: "No , i don't  wish  to participate ",code:"2"  } ],
      termination: true,
      terminationCodes: [ "3" ],

    },
    Q28: {
      number: "S10b",
      question: "Will you be available at home for the next  15 days ?",
      type: "radio",
      options: [
        { label : "Yes, I will be available at home for the next 15 days or so", code:"1"}, //todo continue only otherwise terminate
       { label : "No, I may not be at home " , code:"2"}
      ],
      termination: true,
      terminationCodes: [ "3" ],
    },
    //!  SUPERVISOR OR QUALITY MANAGEMENT TEAM BEFORE PRODUCT PLACEMENT
    Q29: {
      number: "QP1",
      question: "Are you willing to participate in such a study by using the soap sample that we leave with you  for next 15 DAYS ?",
      type: "radio",
      options: [
        {label: "Yes, I wish to participate", code:"1"}, // todo continue only otherwise terminate
        { label : "No, I don't wish to participate" , code:"2"}
      ]
      ,
      termination: true, terminationCodes: [ "3" ],
    },
    Q30: {
      number: "QP2b",
      question: "Will you be available at home for the next 15 days?",
      type: "radio",
      options: [
        {label : "Yes, I will be available at home for the next 15 days or so", code : "1"}, //todo continue only otherwise terminate
        {label:"No, I may not be at home " ,  code :"2"}
      ]
      ,
      termination: true, terminationCodes: [ "3" ],
    },
  }
,
  //?QUESTIONS-
  Section2: {


    Q1: {
      number: "P1a",
      question: "You have visually seen the soap bar and also had a feel of it. As I read out a few statements, please tell me the extent to which you Agree or Disagree to it. Answer using the 5-point scale, where 5 means ‘Strongly Agree’ & 1 means ‘Strongly Disagree’? SINGLE CODE FOR EACH STATEMENT",
      type: "rate",
      singleCode: true,
      STATEMENTS: [
        { id: 'P1a_a', label: 'Overall look and feel of the soap is good' },
        { id: 'P1a_b', label: 'Overall quality of soap feels to be very good ' },
      ],
      // Frequency options
      FREQUENCIES: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' },
      ]
    },

    Q2: {
      number: "P1b",
      question: "Also let me know your opinion on few other aspects. As I read out each statement, kindly let me know your opinion with the help of the card. SINGLE CODE FOR EACH STATEMENT",
      STATEMENTS: [
        { id: 'plb_a', label: 'Shape of the soap is  just right' },
        { id: 'plb_b', label: 'Fragrance of the soap is just right' },
        { id: 'plb_c', label: 'This  soap will give me a  rich creamy lather  and is just right' },
      ],
      FREQUENCIES: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' },
      ],
      // type: "rate",
      lastOption:'plb_c',
      type: "rate",
    },
    Q2a: {
      number: "P1bRank",
      question: "Also let me know your opinion on few other aspects. As I read out each statement, kindly let me know your opinion with the help of the card. SINGLE CODE FOR EACH STATEMENT",
      STATEMENTS: [
        { id: 'plb_ranka', label: 'Shape of the soap is  just right' },
        { id: 'plb_rankb', label: 'Fragrance of the soap is just right' },
        { id: 'plb_rankc', label: 'This  soap will give me a  rich creamy lather  and is just right' },
      ],
      FREQUENCIES: [
        { value: '3', label: 'rank3' },
        { value: '2', label: 'rank2' },
        { value: '1', label: 'rank11' },
      
      ],
     
      lastOption:'plb_c',
      type: "rank",
    },


    Q3: {
      number: "CS1",
      question: "Overall, how much do you like or dislike your current soap __ bar? Answer using the 5-point scale, where 5 means ‘Liked it very much’ & 1 means ‘Disliked it very much’?  ",
      // STATEMENTS: [
      //   { id: 'CS1_a', label: 'how much do you like or dislike your current soap __ bar?' },

      // ],
      lableOptions: [
        { value: '5', label: 'Liked it very much' },
        { value: '4', label: 'Somewhat liked' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Somewhat disliked' },
        { value: '1', label: 'Disliked it very much' },
      ],
      // lableOptions: [ "Liked it very much", "Somewhat liked", "Neutral", "Somewhat disliked ", "Disliked it very much" ],
      type: "RatingSlider",
   

    },

    Q4: {
      number: "CS2a_SHAPE",
      question: "Tell us everything that you like about your current soap, however minor the  feeling  may be please do  let us know all that you like about your current soap? INTERVIEWER: PLEASE PROBE. Anything else? Is there anything more you wish to mention? RECORD VERBATIM",
      type: "",
      label: "SHAPE :",
      // questionsData : [
      //   { id: "a", dimension: "1.Connectedness to Nature", statement: "I love being around nature and I try to spend as much time as I can being surrounded by trees, lakes/rivers and open landscapes", optionA: "I am fine to spend minimum or no time at all around nature or outdoors" },
      //   { id: "b", dimension: "2.Perceived impacts at the individual level", statement: "I believe environmental issues will significantly affect my daily life and well-being.", optionA: "I don’t believe environmental issues have any direct impact on my personal daily life and well being" },
      //   { id: "c", dimension: "3.Perceived impacts for future generations", statement: "I believe environmental issues can significantly harm future generations", optionA: "I believe technological advancements will address environmental issues before they seriously impact future generations" },
      //   { id: "d", dimension: "4.Anthropocentrism vs Ecocentrism", statement: "Taking care of our environment is important for the future as well as for our needs.", optionA: "Taking care of environment is necessary mostly for the overall well-being of the planet, beyond human needs" },
      //   { id: "e", dimension: "5.Environment over other priorities", statement: "Protecting environment must be a priority although this means limiting the growth and development of the country", optionA: "The growth and development of the country must be a priority, even if it has negative consequences on environment" },
      //   { id: "f", dimension: "6.Belief in the existence and origin of climate change", statement: "Climate change / environmental problems are real threat to our world", optionA: "Climate change / environmental problems poses no real threat, and it’s only been hyped by the media" },
      //   { id: "g", dimension: "7.Environmental Sense of Agency", statement: "I believe that my actions, no matter how small, can positively impact the environment ", optionA: "I believe real change requires efforts from Government, corporates etc." },
      //   { id: "h", dimension: "8.Environmental Responsibility", statement: "India should take action to protect the environment because the effects of climate change or environmental propblems are clearly visible here.", optionA: "India doesn’t need to focus on protecting the environment, as bigger and richer countries should take the lead." },
      // ],
      // sliderLabels : [
      //   "A lot like person A",
      //   "Somewhat like person A",
      //   "Neither",
      //   "Somewhat like person B",
      //   "A lot like person B",
      // ]
    },
    Q4b: {
      number: "CS2a_FRAGRANCE",
      question: "Tell us everything that you like about your current soap, however minor the  feeling  may be please do  let us know all that you like about your current soap? INTERVIEWER: PLEASE PROBE. Anything else? Is there anything more you wish to mention? RECORD VERBATIM",
      type: "", label: "FRAGRANCE :"

    }, Q4c: {
      number: "CS2a_IMPACT",
      question: "Tell us everything that you like about your current soap, however minor the  feeling  may be please do  let us know all that you like about your current soap? INTERVIEWER: PLEASE PROBE. Anything else? Is there anything more you wish to mention? RECORD VERBATIM",
      type: "",
      label: "IMPACT ON SMOOTHNESS AND SOFTNESS OF SKIN : "
    },
    Q5: {
      number: "CS2b_SHAPE",
      question: "Tell us everything that you dislike about the current soap? INTERVIEWER: PLEASE PROBE. Anything else? Is there anything more you wish to mention? RECORD VERBATIM",
      type: "",
      label: "SHAPE"

    },
    Q5b: {
      number: "CS2b_FRAGRANCE",
      question: "Tell us everything that you dislike about the current soap? INTERVIEWER: PLEASE PROBE. Anything else? Is there anything more you wish to mention? RECORD VERBATIM",
      type: "",
      label: "FRAGRANCE"

    },
    Q5c: {
      number: "CS2b_IMPACT",
      question: "Tell us everything that you dislike about the current soap? INTERVIEWER: PLEASE PROBE. Anything else? Is there anything more you wish to mention? RECORD VERBATIM",
      type: "",
      label: "IMPACT ON SMOOTHNESS AND SOFTNESS OF SKIN "

    },

    Q6: {
      number: "CS3",
      question: "Overall, basis your experience with your current soap , how likely are you to purchase it again in the next purchase occasion.? Answer using the 5-point scale, where 5 means ‘Definitely will buy’ & 1 means ‘Definitely will not buy’? SINGLE CODE ",
    lableOptions: [
      { value: '5', label: 'Definitely will buy' },
      { value: '4', label: 'Probably will buy' },
      { value: '3', label: 'May or may not buy' },
      { value: '2', label: 'Probably will not bu' },
      { value: '1', label: 'Definitely will notbuy' },
    ],
    
      type: "RatingSlider",
      

    },

    Q8: {
      number: "CS4",
      question: "I have a few statements with me regarding effectiveness of the quality of the soap that you currently use  and recall  the feel after bathing and so are able to comment or opine on. As I read out them one by one, please indicate the extent to which you Agree or Disagree with them based on your experience with the test product. Answer using the 5-point scale, where 5 means ‘Strongly Agree’ & 1 means ‘Strongly Disagree’? SINGLE CODE FOR EACH STATEMENT",
      STATEMENTS: [
        { id: 'cs4_a', label: 'My current soap  does not melt / gets soggy when wet. ' },
        { id: 'cs4_b', label: 'It is a soap that cleanses well and is not harsh on my skin.' },
        { id: 'cs4_c', label: 'It is a soap that  has skin safe ingredients.' },
        { id: 'cs4_d', label: 'Overall, my current soap is a good quality product ' },
      ],
      FREQUENCIES: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' },
      ],
      type: "rate",
    
      lastOption: 'cs4_d',
  
    },

    Q9: {
      number: "CS5",
      question: "I have a few statements with me regarding THE BATHING EXPEREINCE  that you have had with your current soap. As I read out them one by one, please indicate the extent to which you Agree or Disagree with them based on your experience with the test product. Answer using the 5-point scale, where 5 means ‘Strongly Agree’ & 1 means ‘Strongly Disagree’? SINGLE CODE FOR EACH STATEMENT",
      STATEMENTS: [
        { id: 'cs5_a', label: 'Moisturizes   my skin ' },
        { id: 'cs5_b', label: 'Leaves my skin  soft and smooth  ' },
        { id: 'cs5_c', label: 'Leaves my skin fragrant for a long time' },
        { id: 'cs5_d', label: 'Does not cause skin itchy ness/redness or dryness' },
        { id: 'cs5_e', label: 'Overall, it gives a very rich bathing experience ' },

      ],
      FREQUENCIES: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' },
      ],
      lastOption: 'cs5_e',
      type: "rate",


    },

    Q10: {
      number: "CS6",
      question: "Let us talk about  YOUR FEELINGS after bathing  and feeling of confidence in facing the life outside home. Please indicate the extent to which you Agree or Disagree with them based on your experience with the current soap.  Answer using the 5-point scale, where 5 means ‘Strongly Agree’ & 1 means ‘Strongly Disagree’? SINGLE CODE FOR EACH STATEMENT",
      STATEMENTS: [
        { id: 'cs6_a', label: 'Gives a sense of  being confident  because of smelling fresh and clean  ' },
        { id: 'cs6_b', label: 'Gives me new energy to face the world' },
        { id: 'cs6_c', label: 'No odor of  body of any kind' },
        { id: 'cs6_d', label: 'Overall, it offers a feeling of being confident and smelling clean' },

      ],
      FREQUENCIES: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' },
      ],
      lastOption: '4',
      type: "rate",
      singleCode: true

    },

    Q11: {
      number: "CS7",
      question: "Next, we will talk about being protected and comfortable after using the current soap. Please indicate the extent to which you Agree or Disagree basis your experience with the test product. Answer using the 5-point scale, where 5 means ‘Strongly Agree’ & 1 means ‘Strongly Disagree’? SINGLE CODE FOR EACH STATEMENT",
      STATEMENTS: [
        { id: 'cs7_a', label: 'It has natural/quality ingredients so I believe it will protect my skin' },
        { id: 'cs7_b', label: 'It’s a soap that has all the required properties of moisturizing , and  refreshing feeling  ' },
        { id: 'cs7_c', label: 'Does not get  wasted in moist environment and lasts longer' },
        { id: 'cs7_d', label: 'Overall, it offers good comfort, protection  and  value for money' },

      ],
      FREQUENCIES: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' },
      ],
      lastOption: '4',
      type: "rate",

    },

    Q12: {
      number: "CS8",
      question: "Next, we will talk about basic characteristics such as colour, fragrance when in use, fragrance after use  , lathering etc which gives a feeling of a  satisfying bath. Please indicate the extent to which you Agree or Disagree basis your experience with the current  soap  Answer using the 5-point scale, where 5 means ‘Strongly Agree’ & 1 means ‘Strongly Disagree’? SINGLE CODE FOR EACH STATEMENT",
      STATEMENTS: [
        { id: 'cs8_a', label: 'The colour of the soap is just right' },
        { id: 'cs8_b', label: 'The fragrance of the soap in use is just right  ' },
        { id: 'cs8_c', label: 'The duration of lingering fragrance of the soap  after bath  is just right ' },
        { id: 'cs8_d', label: 'The lathering impact of the soap is just right after the bath ' },
        { id: 'cs8_e', label: 'Overall, it offers a very satisfying bathing experience' },
      ],
      FREQUENCIES: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' },
      ],
      lastOption: '5',
      type: "rate",



    },
    Q13: {
      number: "TS1a",
      question: "You have now used the soap   and also had a feel of it. As I read out a few statements, please tell me the extent to which you Agree or Disagree to it. Answer using the 5-point scale, where 5 means ‘Strongly Agree’ & 1 means ‘Strongly Disagree’? SINGLE CODE FOR EACH STATEMENT",
      STATEMENTS: [
        { id: 'ts1a_a', label: 'Overall look and feel of the soap is good' },
        { id: 'ts1a_b', label: 'Overall quality of soap feels  to be very good ' },


      ],
      FREQUENCIES: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' }, ],
      type: "rate",
      singleCode: true

    },

    Q14: {
      number: "TS1b",
      question: "Also let me know your opinion on few other aspects. As I read out each statement, kindly let me know your opinion with the help of the card. SINGLE CODE FOR EACH STATEMENT",
      STATEMENTS: [
        { id: 'ts1b_a', label: 'Shape of the soap is  just right' },
        { id: 'ts1b_b', label: 'Fragrance of the soap is just right' },
        { id: 'ts1b_c', label: 'This  soap will give me a  rich creamy lather  and is just right ' },


      ],
      FREQUENCIES: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' }, ],

      type: "rate",
      singleCode: true

    },
    Q15: {
      number: "TS1",
      question: "Overall, how much did you like or dislike this soap bar? Answer using the 5-point scale, where 5 means ‘Liked it very much’ & 1 means ‘Disliked it very much’? SINGLE CODE ",

      type: "RatingSlider",
      singleCode: true,

    lableOptions: [
      { value: '5', label: 'Liked it very much' },
      { value: '4', label: 'Somewhat liked' },
      { value: '3', label: 'Neutral' },
      { value: '2', label: 'Somewhat disliked' },
      { value: '1', label: 'Disliked it very much' },
    ],

    },

    Q16: {
      number: "TS2a_SHAPE",
      question: "Is there anything that you liked about this   soap that we placed at your home for last 15 days? INTERVIEWER: PLEASE PROBE. Anything else? Is there anything more you wish to mention? RECORD VERBATIM",
      type: "",

      label: "SHAPE"

    },
    Q16SHAPE: {
      number: "TS2a_FRAGRANCE",
      question: "Is there anything that you liked about this   soap that we placed at your home for last 15 days? INTERVIEWER: PLEASE PROBE. Anything else? Is there anything more you wish to mention? RECORD VERBATIM",
      type: "",
      label: "FRAGRANCE"




    },
    Q16_FRAGRANCE: {
      number: "TS2a_IMPACT",
      question: "Is there anything that you liked about this   soap that we placed at your home for last 15 days? INTERVIEWER: PLEASE PROBE. Anything else? Is there anything more you wish to mention? RECORD VERBATIM",
      type: "",
      label: "IMPACT ON SMOOTHNESS AND SOFTNESS OF SKIN"



    },

    Q17: {
      number: "TS2b_SHAPE",
      question: "Is there anything that you disliked about  this  soap that we placed at your home for last 15 days? INTERVIEWER: PLEASE PROBE. Anything else? Is there anything more you wish to mention? RECORD VERBATIM   ",
      type: "",

      label: "SHAPE"

    },
    Q17SHAPE: {
      number: "TS2b_FRAGRANCE",
      question: "Is there anything that you disliked about  this  soap that we placed at your home for last 15 days? INTERVIEWER: PLEASE PROBE. Anything else? Is there anything more you wish to mention? RECORD VERBATIM   ",
      type: "",
      label: "FRAGRANCE"




    },
    Q17_FRAGRANCE: {
      number: "TS2b_IMPACT",
      question: "Is there anything that you disliked about  this  soap that we placed at your home for last 15 days? INTERVIEWER: PLEASE PROBE. Anything else? Is there anything more you wish to mention? RECORD VERBATIM   ",
      type: "",
      label: "IMPACT ON SMOOTHNESS AND SOFTNESS OF SKIN"



    },
    Q18: {
      number: "TS3",
      question: "Overall, basis your experience with the soap so far, how likely are you to purchase it when it is launched in the market? Answer using the 5-point scale, where 5 means ‘Definitely will buy’ & 1 means ‘Definitely will not buy’? SINGLE CODE ",

   lableOptions: [
      { value: '5', label: 'Definitely will buy' },
      { value: '4', label: 'Probably will buy' },
      { value: '3', label: 'May or may not buy' },
      { value: '2', label: 'Probably will not bu' },
      { value: '1', label: 'Definitely will notbuy' },
    ],
    

      type: "RatingSlider",


    },

    Q19: {
      number: "TS4",
      question: "I have a few statements with me regarding effectiveness of the quality of the soap that you can  feel after bathing and so are able to comment or opine on. As I read out them one by one, please indicate the extent to which you Agree or Disagree with them based on your experience with the test product. Answer using the 5-point scale, where 5 means ‘Strongly Agree’ & 1 means ‘Strongly Disagree’? SINGLE CODE FOR EACH STATEMENT",
      STATEMENTS: [
        { id: 'ts4_a', label: 'My current soap  does not melt / gets soggy when wet. ' },
        { id: 'ts4_b', label: 'It is a soap that cleanses well and is not harsh on my skin.' },
        { id: 'ts4_c', label: 'It is a soap that  has skin safe ingredients.' },
        { id: 'ts4_d', label: 'Overall, my current soap is a good quality product ' },


      ],

      FREQUENCIES: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' }, ],
      lastOption: "ts4_d",
      // lableOptions: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],

      type: "rate",
      singleCode: true

    },

    Q20: {
      number: "TS5",
      question: "I have a few statements with me regarding THE BATHING EXPEREINCE  that you have had with this soap. As I read out them one by one, please indicate the extent to which you Agree or Disagree with them based on your experience with the test product. Answer using the 5-point scale, where 5 means ‘Strongly Agree’ & 1 means ‘Strongly Disagree’? SINGLE CODE FOR EACH STATEMENT",
      STATEMENTS: [
        { id: 'ts5_a', label: 'Moisturizes   my skin' },
        { id: 'ts5_b', label: 'Leaves my skin  soft and smooth  ' },
        { id: 'ts5_c', label: 'Leaves my skin fragrant for a long time' },
        { id: 'ts5_d', label: 'Does not cause skin itchy ness/redness or dryness' },
        { id: 'ts5_e', label: 'Overall, it gives a very rich bathing experience' },


      ], FREQUENCIES: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' }, ],
      lastOption: "ts5_e",
      lableOptions: [ "Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree" ],

      type: "rate",
      singleCode: true

    },

    Q21: {
      number: "TS6",
      question: "Let us talk about  YOUR FEELINGS after bathing  and feeling of confidence in facing the life outside home. Please indicate the extent to which you Agree or Disagree with them based on your experience with the test product. Answer using the 5-point scale, where 5 means ‘Strongly Agree’ & 1 means ‘Strongly Disagree’? SINGLE CODE FOR EACH STATEMENT",
      STATEMENTS: [
        { id: 'ts6_a', label: 'Gives a sense of  being confident  because of smelling fresh and clean ' },
        { id: 'ts6_b', label: 'Gives me new energy to face the world' },
        { id: 'ts6_c', label: 'No odor of  body of any kind' },
        { id: 'ts6_d', label: 'Overall, it offers a feeling of being confident and smelling clean' },


      ],
      lastOption: "ts6_d",
      lableOptions: [ "Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree" ],

      type: "rate",
      FREQUENCIES: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' }, ],

    },

    Q22: {
      number: "TS7",
      question: "Next, we will talk about being protected and comfortable  of using the test soaps. Please indicate the extent to which you Agree or Disagree basis your experience with the test product. Answer using the 5-point scale, where 5 means ‘Strongly Agree’ & 1 means ‘Strongly Disagree’? SINGLE CODE FOR EACH STATEMENT",
      STATEMENTS: [
        { id: 'ts7_a', label: 'It has natural/quality ingredients so I believe it will protect my skin' },
        { id: 'ts7_b', label: 'It’s a soap that has all the required properties of moisturizing , and  refreshing feeling  ' },
        { id: 'ts7_c', label: 'Does not get  wasted in moist environment and lasts longer' },
        { id: 'ts7_d', label: 'Overall, it offers good comfort, protection  and  value for money' },


      ],
      lastOption: "ts7_d",
      lableOptions: [ "Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree" ],

      type: "rate",
      FREQUENCIES: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' }, ],

    },

    Q23: {
      number: "TS8",
      question: "Next, we will talk about basic characteristics such as colour, fragrance when in use, fragrance after use  , lathering etc which gives a satisfying bath. Please indicate the extent to which you Agree or Disagree basis your experience with the test product. Answer using the 5-point scale, where 5 means ‘Strongly Agree’ & 1 means ‘Strongly Disagree’? SINGLE CODE FOR EACH STATEMENT",
      STATEMENTS: [
        { id: 'ts8_a', label: 'The colour of the soap is just right' },
        { id: 'ts8_b', label: 'The fragrance of the soap in use is just right  ' },
        { id: 'ts8_c', label: 'The duration of lingering fragrance of the soap  after bath  is just right ' },
        { id: 'ts8_d', label: 'The lathering impact of the soap is just right after the bath ' },
        { id: 'ts8_e', label: 'Overall, it offers a very satisfying bathing experience' },


      ],
      lastOption: "ts8_e",
      FREQUENCIES: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' }, ],

      type: "rate",
      singleCode: true

    },

    Q24: {
      number: "TS9",
      question: "I have a few other statements,  that can be considered as key benefits of this soap and the company/brand can talk about it in their communication. Please indicate the extent to which you Agree or Disagree with them based on your experience with the test product. Answer using the 5-point scale, where 5 means ‘Strongly Agree’ & 1 means ‘Strongly Disagree’? SINGLE CODE FOR EACH STATEMENT", label: "Functional Benefits",
      STATEMENTS: [

        { id: 'ts9F_a', label: 'Has natural ingredients' },
        { id: 'ts9F_b', label: 'Has healing properties' },
        { id: 'ts9F_c', label: 'Is a good soap for daily beauty care' },
        { id: 'ts9F_d', label: 'Lathers ' },
        { id: 'ts9F_e', label: 'Value for money' },
        { id: 'ts9F_f', label: 'Packaging can be recycled' },
        { id: 'ts9F_g', label: 'Does not dry my skin' },
        { id: 'ts9F_h', label: 'Vegan/ayurvedic/medical soap' },
        { id: 'ts9F_i', label: 'Suitable for everybody in the family men and women' },
        { id: 'ts9F_k', label: 'Sensorial Benefits' },
        { id: 'ts9F_', label: 'For my skin to feel refreshing/invigorated  I use this soap  bar' },
        { id: 'ts9_m', label: 'This soap is for youthful skin' },
        { id: 'ts9_n', label: 'This soap is for young and modern woman' },
        { id: 'ts9_o', label: 'This soap balances skin moisture' },
        { id: 'ts9_', label: 'This soap is creamy and  deep cleans my skin' },
        { id: 'ts9_', label: 'This soap reduces pimples and blackheads' },
        { id: 'ts9_', label: 'Makes my skin glow' },
        { id: 'ts9_', label: 'Suitable for all skin types' },
        { id: 'ts9_', label: 'Suitable for sensitive/problematic skin' },
        { id: 'ts9_', label: 'Gently cleans the skin' },
        { id: 'ts9_', label: 'Emotional Benefits' },
        { id: 'ts9_p', label: 'Dermatologist recommended' },
        { id: 'ts9_q', label: 'Leaves my skin feeling softer and smoother' },
        { id: 'ts9_r', label: 'Makes me feel beautiful' },
        { id: 'ts9_s', label: 'Makes me feel confident' },
        { id: 'ts9_t', label: 'Long lasting fragrance' },
        { id: 'ts9_u', label: 'Provides luxurious bathing experience' },
        { id: 'ts9_v', label: 'Controls all kinds of skin ailments' },
        { id: 'ts9_w', label: 'Helps me to take good care of me' },
        { id: 'ts9_x', label: 'Makes me feel like a complete woman' },


      ],
      lableOptions: [ "Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree" ],

      type: "rate",
      singleCode: true

    },

    Q25: {
      number: "C1",
      question: "Which of the following statement best describes your feeling about the BATHING SOAP   that you used for the last fifteeen day ? SINGLE CODE ",

      lableOptions: [
      { value: '5', label: 'Definitely will buy' },
      { value: '4', label: 'Probably will buy' },
      { value: '3', label: 'May or may not buy' },
      { value: '2', label: 'Probably will not bu' },
      { value: '1', label: 'Definitely will notbuy' },
    ],
    

      type: "RatingSlider",
      singleCode: true

    },

    Q26segment_a: {
      number: "segment_a",
      question: "Segment 2. Next, again we will be reading out some more contrasting statements to you. As explained ",
lable:"1.Connectedness to Nature",
statementA:"I love being around nature and I try to spend as much time as I can being surrounded by trees, lakes/rivers and open landscapes",
statementB:"I am fine to spend minimum or no time at all around nature or outdoors",
     
      lableOptions: [
        { value: 'A lot like person A', label: 'A lot like person A' },
        { value: 'Somewhat like person A', label: 'Somewhat like person A' },
        { value: 'Neither', label: 'Neither' },
        { value: '55', label: 'Somewhat like person B' },
        { value: '1', label: 'A lot like person B' },
      ],
       instruction:"Please listen to these statements carefully, and tell us which one do you feel closer to?",
      type: "segment",
      singleCode: true
   

    },
    Q26segment_b: {
      number: "segment_b",
      question: "Segment 2. Next, again we will be reading out some more contrasting statements to you. As explained ",
lable:"Perceived impacts at the individual level",
statementA:"I believe environmental issues will significantly affect my daily life and well-being",
statementB:"I don’t believe environmental issues have any direct impact on my personal daily life and well being",
     
      lableOptions: [
        { value: 'A lot like person A', label: 'A lot like person A' },
        { value: 'Somewhat like person A', label: 'Somewhat like person A' },
        { value: 'Neither', label: 'Neither' },
        { value: '55', label: 'Somewhat like person B' },
        { value: '1', label: 'A lot like person B' },
      ],
       instruction:"Please listen to these statements carefully, and tell us which one do you feel closer to?",
      type: "segment",
      singleCode: true
    
    },
    Q25a: {
      number: "C1a",
      question: "Which of the following statement best describes your feeling about the BATHING SOAP   that you used for the last fifteeen day ? SINGLE CODE ",

      lableOptions: [
      { value: '5', label: 'Definitely will buy' },
      { value: '4', label: 'Probably will buy' },
      { value: '3', label: 'May or may not buy' },
      { value: '2', label: 'Probably will not bu' },
      { value: '1', label: 'Definitely will notbuy' },
    ],
    

      type: "RatingSlider",
      singleCode: true

    },
  }
}

export default products;


