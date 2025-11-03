const questions = [
  {
    category: "before-1945",
    questions: [
      {
        question: "In which year did the Lam Son uprising led by Le Loi begin?",
        options: ["1418", "1428", "1440", "1407"],
        correctAnswer: 0,
      },
      {
        question: "Under which dynasty was the Imperial Citadel of Hue built?",
        options: ["Le So", "Tay Son", "Nguyen", "Tran"],
        correctAnswer: 2,
      },
      {
        question: "The Dien Hong Conference is associated with which dynasty?",
        options: ["Tran", "Ly", "Le", "Nguyen"],
        correctAnswer: 0,
      },
      {
        question: "Who defeated the Mongol-Yuan army on the Bach Dang River in 1288?",
        options: ["Tran Nhan Tong", "Tran Quoc Tuan (Hung Dao Vuong)", "Tran Thanh Tong", "Ly Thuong Kiet"],
        correctAnswer: 1,
      },
      {
        question: "'Nam Quoc Son Ha' (Mountains and Rivers of the Southern Country) is considered a declaration of independence from which era?",
        options: ["Ly Dynasty", "Tran Dynasty", "Le Dynasty", "Nguyen Dynasty"],
        correctAnswer: 0,
      },
      {
        question: "The 'Edict on the Transfer of the Capital' (Chieu Doi Do, 1010) moved the capital to which city?",
        options: ["Hoa Lu", "Hue", "Thang Long", "Phu Xuan"],
        correctAnswer: 2,
      },
      {
        question: "The Treaty of Dong Quan (1427) marked which historical event?",
        options: ["Yen The Uprising", "The end of the resistance war against the Ming", "The start of the war against the Song", "The beginning of the Le Trung Hung period"],
        correctAnswer: 1,
      },
      {
        question: "The war against the Song army was won in 1077 at which battle?",
        options: ["Bach Dang", "Nhu Nguyet", "Chi Lang", "Rach Gam"],
        correctAnswer: 1,
      },
      {
        question: "Who was the author of 'Binh Ngo Dai Cao' (Great Proclamation upon the Pacification of the Wu)?",
        options: ["Nguyen Trai", "Nguyen Du", "Ngo Si Lien", "Le Thanh Tong"],
        correctAnswer: 0,
      },
      {
        question: "The Trinh-Nguyen civil war mainly occurred in which centuries?",
        options: ["15th", "16th", "17th-18th", "19th"],
        correctAnswer: 2,
      },
      {
        question: "The Can Vuong movement broke out after which event?",
        options: ["Treaty of Nham Tuat 1862", "The fall of the royal capital in 1885", "Yen The Uprising 1884", "Dong Kinh Free School 1907"],
        correctAnswer: 1,
      },
      {
        question: "Phan Boi Chau was associated with which patriotic movement?",
        options: ["Duy Tan", "Dong Du", "Can Vuong", "Yen Bai"],
        correctAnswer: 1,
      },
      {
        question: "Who was the founder of the Ly dynasty?",
        options: ["Ly Thai To", "Ly Nhan Tong", "Ly Thuong Kiet", "Ly Thai Tong"],
        correctAnswer: 0,
      },
      {
        question: "Which dynasty issued the Hong Duc Code (Quoc Trieu Hinh Luat)?",
        options: ["Tran", "Le So", "Nguyen", "Ly"],
        correctAnswer: 1,
      },
      {
        question: "The Temple of Literature (Van Mieu-Quoc Tu Giam) was built in which dynasty?",
        options: ["Ly", "Tran", "Le", "Nguyen"],
        correctAnswer: 0,
      },
      {
        question: "The Tay Son uprising initially broke out in which province?",
        options: ["Nghe An", "Binh Dinh", "Thua Thien Hue", "Quang Nam"],
        correctAnswer: 1,
      },
      {
        question: "Nguyen Trai was executed under which historical event?",
        options: ["Le-Mac conflict", "Lam Son uprising", "Le Chi Vien case", "Trinh-Nguyen civil war"],
        correctAnswer: 2,
      },
      {
        question: "Who unified Vietnam after defeating the Tay Son dynasty?",
        options: ["Nguyen Anh (Gia Long)", "Le Loi", "Trinh Kiem", "Nguyen Hue"],
        correctAnswer: 0,
      },
      {
        question: "The Yen The uprising was led by which patriot?",
        options: ["Phan Dinh Phung", "Hoang Hoa Tham", "Nguyen Trung Truc", "Pham Hong Thai"],
        correctAnswer: 1,
      },
      {
        question: "The Dong Kinh Free School (Dong Kinh Nghia Thuc) was established in which year?",
        options: ["1904", "1906", "1907", "1910"],
        correctAnswer: 2,
      },
    ],
  },
  {
    category: "1945-1975",
    questions: [
      {
        question: "In which year did the August Revolution succeed?",
        options: ["1944", "1945", "1946", "1954"],
        correctAnswer: 1,
      },
      {
        question: "The Dien Bien Phu victory took place in which year?",
        options: ["1950", "1952", "1954", "1956"],
        correctAnswer: 2,
      },
      {
        question: "Which agreement, signed in 1954, ended the war in Indochina?",
        options: ["Geneva Agreement", "Paris Agreement", "Hanoi Treaty", "Lausanne Treaty"],
        correctAnswer: 0,
      },
      {
        question: "The National Liberation Front of South Vietnam was established in which year?",
        options: ["1959", "1960", "1963", "1968"],
        correctAnswer: 1,
      },
      {
        question: "The Tet Offensive took place in which year?",
        options: ["1965", "1968", "1972", "1975"],
        correctAnswer: 1,
      },
      {
        question: "The 1972 Quang Tri Citadel campaign belonged to which operation?",
        options: ["Route 9 - Southern Laos", "Tri - Thien", "Tay Nguyen", "Ho Chi Minh"],
        correctAnswer: 1,
      },
      {
        question: "How long did the defence of Quang Tri Citadel in 1972 last?",
        options: ["21 days and nights", "45 days and nights", "60 days and nights", "81 days and nights"],
        correctAnswer: 3,
      },
      {
        question: "Which river was linked to the defensive line in Quang Tri in 1972?",
        options: ["Ben Hai River", "Thach Han River", "Huong River", "Gianh River"],
        correctAnswer: 1,
      },
      {
        question: "'Hanoi - Dien Bien Phu in the Air' refers to the campaign against B-52 bombers in which year?",
        options: ["1970", "1971", "1972", "1973"],
        correctAnswer: 2,
      },
      {
        question: "The Paris Peace Accords were signed in which year?",
        options: ["1972", "1973", "1974", "1975"],
        correctAnswer: 1,
      },
      {
        question: "Which campaign liberated Saigon - Gia Dinh?",
        options: ["Ho Chi Minh Campaign", "Tay Nguyen Campaign", "Tri - Thien Campaign", "Hue - Da Nang Campaign"],
        correctAnswer: 0,
      },
      {
        question: "The South of Vietnam was completely liberated on which date?",
        options: ["30 April 1975", "2 September 1976", "19 May 1975", "1 May 1975"],
        correctAnswer: 0,
      },
      {
        question: "The Democratic Republic of Vietnam was proclaimed on which date?",
        options: ["19 August 1945", "30 April 1975", "2 September 1945", "20 December 1960"],
        correctAnswer: 2,
      },
      {
        question: "Who was the first President of the Democratic Republic of Vietnam?",
        options: ["Ho Chi Minh", "Ton Duc Thang", "Pham Van Dong", "Vo Nguyen Giap"],
        correctAnswer: 0,
      },
      {
        question: "Which operation in 1950 opened the Vietnam-China border for aid?",
        options: ["Border Campaign", "Hoa Binh Campaign", "Tay Bac Campaign", "Dien Bien Phu Campaign"],
        correctAnswer: 0,
      },
      {
        question: "The 'Road 9 - Southern Laos' campaign occurred in which year?",
        options: ["1970", "1971", "1972", "1973"],
        correctAnswer: 1,
      },
      {
        question: "Who commanded the Dien Bien Phu campaign?",
        options: ["Vo Nguyen Giap", "Ho Chi Minh", "Pham Van Dong", "Nguyen Chi Thanh"],
        correctAnswer: 0,
      },
      {
        question: "Which campaign liberated Hue and Da Nang in 1975?",
        options: ["Ho Chi Minh Campaign", "Tay Nguyen Campaign", "Hue-Da Nang Campaign", "Tri-Thien Campaign"],
        correctAnswer: 2,
      },
      {
        question: "The slogan 'Nothing is more precious than independence and freedom' was said by whom?",
        options: ["Vo Nguyen Giap", "Ho Chi Minh", "Le Duan", "Pham Van Dong"],
        correctAnswer: 1,
      },
      {
        question: "The 21st National Liberation Congress in the South took place in which year?",
        options: ["1965", "1969", "1972", "1973"],
        correctAnswer: 1,
      },
    ],
  },
  {
    category: "1975-now",
    questions: [
      {
        question: "Vietnam officially reunified the country in which year?",
        options: ["1975", "1976", "1977", "1980"],
        correctAnswer: 1,
      },
      {
        question: "The Doi Moi (Renovation) policy began at which National Congress?",
        options: ["IV (1976)", "V (1982)", "VI (1986)", "VII (1991)"],
        correctAnswer: 2,
      },
      {
        question: "Vietnam joined ASEAN in which year?",
        options: ["1993", "1995", "1997", "2000"],
        correctAnswer: 1,
      },
      {
        question: "Vietnam joined the WTO in which year?",
        options: ["2004", "2006", "2007", "2010"],
        correctAnswer: 2,
      },
      {
        question: "The two most recently established centrally-controlled cities (as of the 2010s) are which?",
        options: ["Hanoi & Ho Chi Minh City", "Hai Phong & Da Nang", "Can Tho & Da Nang", "Thua Thien Hue & Da Lat"],
        correctAnswer: 2,
      },
      {
        question: "The most recent expansion of Hanoi's administrative boundaries occurred in which year?",
        options: ["1991", "2001", "2008", "2013"],
        correctAnswer: 2,
      },
      {
        question: "Which Vietnamese site is recognised as a UNESCO World Natural Heritage?",
        options: ["Hoi An Ancient Town", "Imperial Citadel of Thang Long", "Ha Long Bay", "Trang An Scenic Complex"],
        correctAnswer: 2,
      },
      {
        question: "The current Constitution of Vietnam was adopted in which year?",
        options: ["1992", "2001", "2013", "2015"],
        correctAnswer: 2,
      },
      {
        question: "The most recent SEA Games hosted by Vietnam (before 2025) was held in which year?",
        options: ["2003", "2019", "2021 (held in 2022)", "2023"],
        correctAnswer: 2,
      },
      {
        question: "Which location is associated with the Ho Chi Minh Trail at sea?",
        options: ["Cua Tung", "Cua Viet", "Rach Goc", "Cua Hoi"],
        correctAnswer: 2,
      },
      {
        question: "The Quang Tri Ancient Citadel is now located in which province?",
        options: ["Quang Binh", "Quang Tri", "Thua Thien Hue", "Quang Nam"],
        correctAnswer: 1,
      },
      {
        question: "The Complex of Hue Monuments was recognised as a World Cultural Heritage site in which year?",
        options: ["1991", "1993", "1995", "1997"],
        correctAnswer: 1,
      },
      {
        question: "Vietnam established diplomatic relations with the United States in which year?",
        options: ["1991", "1993", "1995", "1997"],
        correctAnswer: 2,
      },
      {
        question: "Vietnam hosted the APEC Summit for the first time in which year?",
        options: ["2004", "2006", "2017", "2019"],
        correctAnswer: 1,
      },
      {
        question: "The National Assembly adopted the Law on Cybersecurity in which year?",
        options: ["2015", "2017", "2018", "2020"],
        correctAnswer: 2,
      },
      {
        question: "Vietnam won its first AFC U23 Championship silver medal in which year?",
        options: ["2016", "2018", "2019", "2021"],
        correctAnswer: 1,
      },
      {
        question: "The Sơn Đoòng Cave, world's largest cave, is located in which province?",
        options: ["Quang Tri", "Quang Binh", "Ha Giang", "Ninh Binh"],
        correctAnswer: 1,
      },
      {
        question: "The Tran Nhan Tong Zen Monastery in Quang Ninh was recognized as a special national site in which year?",
        options: ["2010", "2012", "2015", "2019"],
        correctAnswer: 2,
      },
      {
        question: "Vietnam's GDP exceeded 400 billion USD for the first time in which year?",
        options: ["2019", "2020", "2021", "2022"],
        correctAnswer: 3,
      },
      {
        question: "Vietnam's capital, Hanoi, celebrated its 1000th founding anniversary in which year?",
        options: ["2008", "2009", "2010", "2011"],
        correctAnswer: 2,
      },
    ],
  },
];