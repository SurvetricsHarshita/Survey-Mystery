const bengali= {
  Section1: {
    "1.1": {
      "number": 1.1,
      "question": "শহরের নাম",
      "type": "input",
      "inputType": "text"
    },
    "1.2": {
      "number": 1.2,
      "question": "ক্লিনিক পরিদর্শন করেছেন",
      "type": "input",
      "inputType": "text"
    },
    "1.3": {
      "number": 1.3,
      "question": "পরিদর্শনের তারিখ",
      "type": "input",
      "inputType": "date"
    },
    "1.4": {
      "number": 1.4,
      "question": "ইন্টারভিউয়ারের নাম",
      "type": "input",
      "inputType": "text"
    },
    "1.5": {
      "number": 1.5,
      "question": "পরিদর্শনের উদ্দেশ্য",
      type: "multi",
      "options": [
        {
          "label": "সাধারণ চিকিৎসা (ফ্লু, কাশি, সর্দি, জ্বর) ",
          "code": "1"
        },
        {
          "label": "রক্ত/থুথু পরীক্ষা",
          "code": "2"
        },
        {
          "label": "Eye Testing",
          "code": "3"
        },
        {
          "label": "অন্যান্য (উল্লেখ করুন)",
          "code": "4"
        }
      ]
    },
    "B1. ": {
      "number": "B1. ",
      "question": "অপেক্ষমাণ এলাকা কি পরিষ্কার এবং ভালভাবে রক্ষণাবেক্ষণ করা হয়?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ],
      "section": "বি: সেকশন 2: সুবিধা এবং অবকাঠামো"
    },
    "B2.": {
      "number": "B2.",
      "question": "সাধারণ সুযোগ-সুবিধা (টয়লেট, ওয়াশবেসিন ইত্যাদি) কি কার্যকরী এবং স্বাস্থ্যকর?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "B3.": {
      "number": "B3.",
      "question": "পর্যাপ্ত জলের ব্যবস্থা আছে কি?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "B4.": {
      "number": "B4.",
      "question": "সব দর্শনার্থীদের সহজে বোঝার জন্য সাইন বোর্ড আছে কি?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "B5.": {
      "number": "B5.",
      "question": "স্বাস্থ্য-সম্পর্কিত তথ্যমূলক সামগ্রী (যেমন, এইচআইভি/এইডস, ডায়াবেটিস সম্পর্কিত পোস্টার) প্রদর্শিত হয়?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "B6.": {
      "number": "B6.",
      "question": "অপেক্ষমাণ এলাকায় বসার জায়গা কি রোগীদের জন্য পর্যাপ্ত?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "C1.": {
      "number": "C1.",
      "question": "ক্লিনিকে প্রবেশ করার পর আপনার প্রথম প্রক্রিয়াটি কী ছিল? (যেমন, অভিবাদন, কাউন্টারে রেজিস্ট্রেশন)",
      "type": "input",
      "options": [
        {
          "label": "10 মিনিটেরও কম",
          "code": "1"
        },
        {
          "label": "10-15 মিনিট",
          "code": "2"
        },
        {
          "label": "15-30 মিনিট",
          "code": "3"
        }
      ],
      "section": "সি: সেকশন 3: রেজিস্ট্রেশন এবং ইন্টারঅ্যাকশন",
      "inputType": "text",
      "label": "পর্যবেক্ষণ/বিস্তারিত"
    },
    "C2.": {
      "number": "C2.",
      "question": "নিবন্ধন প্রক্রিয়ার সময় কর্মীরা কি বিনয়ী ছিলেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        },
        {
          "label": "পর্যবেক্ষণ করা হয়নি",
          "code": "3"
        }
      ]
    },
    "C3.": {
      "number": "C3.",
      "question": "রিসেপশন দেখার আগে কতক্ষণ অপেক্ষা করতে হয়েছে?",
      "type": "radio",
      "options": [
        {
          "label": "10 মিনিটেরও কম",
          "code": "1"
        },
        {
          "label": "10-15 মিনিট",
          "code": "2"
        },
        {
          "label": "15-30 মিনিট",
          "code": "3"
        },
        {
          "label": "30 মিনিটের বেশি",
          "code": "4"
        }
      ]
    },
    "E1.": {
      "number": "E1.",
      "question": "একজন ডাক্তার কি আপনাকে পরীক্ষা করেছেন ?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ],
      "section": "D: বিভাগ 5: ডাক্তার পরীক্ষা এবং রোগ নির্ণয়"
    },
    "E2.": {
      "number": "E2.",
      "question": "ডাক্তার কি আপনাকে শারীরিকভাবে পরীক্ষা করেছেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "E3.": {
      "number": "E3.",
      "question": "ডাক্তার কি গোপনীয়তার আশ্বাস দিয়েছেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "E4.": {
      "number": "E4.",
      "question": "পরীক্ষা শুরু করার আগে ডাক্তার কি সম্পর্ক তৈরি করেছিলেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "E5.": {
      "number": "E5.",
      "question": "পরীক্ষার সময় ডাক্তার কি গ্লাভস ব্যবহার করেছিলেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "E6.": {
      "number": "E6.",
      "question": "ডাক্তার কি জীবাণুমুক্ত যন্ত্র ব্যবহার করেছেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "E7.": {
      "number": "E7.",
      "question": "ডাক্তারের আলোচনা কি বোধগম্য ছিল?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "E8.": {
      "number": "E8.",
      "question": "আলোচনা চলাকালীন, আপনাকে আপনার সন্দেহ/প্রশ্ন সম্পর্কে জিজ্ঞাসা করার সুযোগ দেওয়া হয়েছিল?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "E9.": {
      "number": "E9.",
      "question": "ডাক্তার কি আপনার প্রশ্ন/সন্দেহের উত্তর দিতে (বা স্পষ্ট করতে) সক্ষম ছিলেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "E10.": {
      "number": "E10.",
      "question": "ডাক্তারের সাথে আলোচনাটা বুঝতে পেরেছেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "E12": {
      "number": "E12",
      "question": "সামগ্রিকভাবে, আপনি ডাক্তারের আচরণকে কীভাবে মূল্যায়ন করবেন?",
      "type": "radio",
      "options": [
        {
          "label": "রোগী এবং পুঙ্খানুপুঙ্খ",
          "code": "1"
        },
        {
          "label": "তাড়াহুড়ো এবং সুপারফিশিয়াল",
          "code": "2"
        },
        {
          "label": "অভদ্র এবং অমনোযোগী",
          "code": "3"
        }
      ]
    },
    "E14": {
      "number": "E14",
      "question": "আনুমানিক সময় (মিনিট) যে ডাক্তার আপনার সাথে কাটিয়েছেন?",
      "type": "radio",
      "options": [
        {
          "label": "10 মিনিটেরও কম",
          "code": "1"
        },
        {
          "label": "10-15 মিনিট",
          "code": "2"
        },
        {
          "label": "15-30 মিনিট",
          "code": "3"
        },
        {
          "label": "30 মিনিটের বেশি",
          "code": "4"
        }
      ]
    },
    "E15.": {
      "number": "E15.",
      "question": "আপনাকে দেওয়া কাউন্সেলিং/পরীক্ষা/নির্ণয়ের মানের ক্ষেত্রে আপনি ডাক্তারকে কীভাবে মূল্যায়ন করবেন?",
      "type": "radio",
      "options": [
        {
          "label": "খুব সন্তুষ্ট",
          "code": "1"
        },
        {
          "label": "সন্তুষ্ট",
          "code": "2"
        },
        {
          "label": "নিরপেক্ষ",
          "code": "3"
        },
        {
          "label": "অসন্তুষ্ট",
          "code": "4"
        },
        {
          "label": "খুব অসন্তুষ্ট",
          "code": "5"
        }
      ]
    },
    "F1": {
      "number": "F1",
      "question": "আপনি আই ক্লিনিকে গিয়েছিলেন কি।",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ],
      "section": "বিভাগ E: নির্দিষ্ট পরিষেবা"
    },
    "F2": {
      "number": "F2",
      "question": "একজন ডাক্তার কি আপনাকে শারীরিকভাবে পরীক্ষা করেছিলেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "F3": {
      "number": "F3",
      "question": " চোখের দৃষ্টি পরীক্ষা করা হয়েছে কি?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "F4": {
      "number": "F4",
      "question": " পরীক্ষা শুরু করার আগে ডাক্তার কি সম্পর্ক তৈরি করেছিলেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "F5": {
      "number": "F5",
      "question": "পরীক্ষার সময় ডাক্তার কি গ্লাভস ব্যবহার করেছিলেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "F6": {
      "number": "F6",
      "question": " ডাক্তার কি জীবাণুমুক্ত যন্ত্র ব্যবহার করেছেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "F9A": {
      "number": "F9A",
      "question": "পরীক্ষার পর সুপারিশ কি ছিল? \"চোখ ড্রপ\" কি তাদের মধ্যে একটি?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "F9B": {
      "number": "F9B",
      "question": "পরীক্ষার পর সুপারিশ কি ছিল? সার্জারি কি তাদের মধ্যে একটি?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "F9C": {
      "number": "F9C",
      "question": "পরীক্ষার পর সুপারিশ কি ছিল? তাদের মধ্যে একটি কি \"কোনো চিকিৎসার প্রয়োজন নেই\"?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "F9D": {
      "number": "F9D",
      "question": "পরীক্ষার পর সুপারিশ কি ছিল? এটা কিছু, এখনও জিজ্ঞাসা করেননি (অন্যান্য)?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "F9E": {
      "number": "F9E",
      "question": "পরীক্ষার পর সুপারিশ কি ছিল? উল্লেখ করুন",
      "type": "input"
    },
    "G1.": {
      "number": "G1.",
      "question": "আপনাকে রক্ত ​​​​পরীক্ষা বা থুতু সংগ্রহের জন্য প্রেসক্রাইব করা হয়েছিল কি?",
      "type": "radio",
      "options": [
        {
          "label": "নির্ধারিত রক্ত ​​পরীক্ষা",
          "code": "1"
        },
        {
          "label": "নির্ধারিত থুতু সংগ্রহ",
          "code": "2"
        },
        {
          "label": "না",
          "code": "3"
        }
      ],
      "section": "জি: রক্ত/থুথু পরীক্ষা (যদি প্রযোজ্য হয়)"
    },
    "G2. ": {
      "number": "G2. ",
      "question": "যদি হ্যাঁ হয়, আপনি কি রক্ত ​​​​পরীক্ষা বা থুথু সংগ্রহ বিভাগে গিয়েছিলেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "G3.": {
      "number": "G3.",
      "question": "ক্লিনিকে কি ল্যাব পরীক্ষার জন্য একটি ব্যক্তিগত এলাকা ছিল? হ্যাঁ(1), না(2)",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "G4.": {
      "number": "G4.",
      "question": "রক্ত নেওয়ার সময় ল্যাব টেকনিশিয়ান কি গ্লাভস পরেছিলেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "G5.": {
      "number": "G5.",
      "question": "ল্যাব টেকনিশিয়ান কি আপনার কাছ থেকে রক্ত ​​নেওয়া/থুতু সংগ্রহ করার সময় মাস্ক পরেছিলেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "G6.": {
      "number": "G6.",
      "question": "ফার্মাসিস্ট/ল্যাব টেকনিশিয়ানের সামগ্রিক আচরণ কেমন ছিল?",
      "type": "radio",
      "options": [
        {
          "label": "রোগী এবং সবকিছু সঠিকভাবে ব্যাখ্যা করেছেন",
          "code": "1"
        },
        {
          "label": "তাড়া ছিল",
          "code": "2"
        },
        {
          "label": "অভদ্র এবং ব্যাখ্যা করেননি",
          "code": "3"
        }
      ]
    },
    "G7.": {
      "number": "G7.",
      "question": "রক্ত পরীক্ষা প্রক্রিয়ার জন্য কত সময় লেগেছে?",
      "type": "radio",
      "options": [
        {
          "label": "10 মিনিটেরও কম",
          "code": "1"
        },
        {
          "label": "10-15 মিনিট",
          "code": "2"
        },
        {
          "label": "15-30 মিনিট",
          "code": "3"
        },
        {
          "label": "30 মিনিটের বেশি",
          "code": "4"
        }
      ]
    },
    "G8.": {
      "number": "G8.",
      "question": "পরীক্ষার ফলাফল কি ল্যাব টেকনিশিয়ান আপনার কাছে প্রকাশিত করেছিলেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        },
        {
          "label": "ডাক্তারের কাছে রেফার করা হয়েছে",
          "code": "3"
        },
        {
          "label": "কাউন্সেলরের কাছে রেফার করা হয়েছে",
          "code": "4"
        },
        {
          "label": "পরে আসতে বলা হয়েছে",
          "code": "5"
        }
      ]
    },
    "H1": {
      "number": "H1",
      "question": "ফার্মাসিস্ট কি ওষুধের ডোজ এবং ব্যবহার ব্যাখ্যা করেছিলেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ],
      "section": "H: ঔষধ বিতরণ"
    },
    "H2": {
      "number": "H2",
      "question": " ফার্মাসিস্ট কি গ্লাভস পরেছিলেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "H3": {
      "number": "H3",
      "question": "ফার্মাসিস্ট কি মাস্ক পরেছিলেন?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "H4": {
      "number": "H4",
      "question": " সমস্ত নির্ধারিত ওষুধ পাওয়া গিয়েছিল?",
      "type": "radio",
      "options": [
        {
          "label": "হ্যাঁ",
          "code": "1"
        },
        {
          "label": "না",
          "code": "2"
        }
      ]
    },
    "H5": {
      "number": "H5",
      "question": " আপনাকে কি করতে নির্দেশ দেওয়া হয়েছিল?",
      "type": "radio",
      "options": [
        {
          "label": "পরে ফিরুন",
          "code": "1"
        },
        {
          "label": "বাইরে কিনুন",
          "code": "2"
        },
        {
          "label": "কোন নির্দেশনা নেই",
          "code": "3"
        },
        {
          "label": "প্রযোজ্য নয়",
          "code": "4"
        }
      ]
    },
    "H6": {
      "number": "H6",
      "question": "সামগ্রিকভাবে, আপনি ফার্মাসিস্টের আচরণকে কীভাবে মূল্যায়ন করবেন?",
      "type": "radio",
      "options": [
        {
          "label": "রোগী এবং পুঙ্খানুপুঙ্খ",
          "code": "1"
        },
        {
          "label": "তাড়াহুড়ো এবং সুপারফিশিয়াল",
          "code": "2"
        },
        {
          "label": "অভদ্র এবং অমনোযোগী",
          "code": "3"
        }
      ]
    },
    "I": {
      "number": "I",
      "question": "পরিবারের সাথে সামগ্রিক সন্তুষ্টিকে রেট দিন",
      "type": "rate",
      "section": "I: বিভাগ 7: সুবিধা এবং পরিষেবাগুলির সাথে সামগ্রিক সন্তুষ্টি",
      "STATEMENTS": [
        {
          "label": "নিবন্ধন পরিষেবা",
          "id": "I1"
        },
        {
          "label": "ডাক্তারের পরীক্ষা",
          "id": "I2"
        },
        {
          "label": "দৃষ্টি যত্ন",
          "id": "I3"
        },
        {
          "label": "ল্যাব পরিষেবাগুলি",
          "id": "I4"
        },
        {
          "label": "পরিচ্ছন্নতা এবং স্বাস্থ্যবিধি",
          "id": "I5"
        },
        {
          "label": "কর্মীদের আচরণ",
          "id": "I6"
        }
      ],
      "FREQUENCIES": [
        {
          "label": "খুব খারাপ",
          "value": "1"
        },
        {
          "label": "খারাপ",
          "value": "2"
        },
        {
          "label": "গড়",
          "value": "3"
        },
        {
          "label": "ভাল",
          "value": "4"
        },
        {
          "label": "খুব ভাল",
          "value": "5"
        },
        {
          "label": "এনএ",
          "value": "8"
        }
      ]
    }
  }
}
  export default bengali