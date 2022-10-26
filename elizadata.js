// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"How are you?",
// additions (not original)
"Do you need help?",
"What can I do for you?",
"I might be able to help you...",
];

var elizaFinals = [
"Goodbye.  It was nice talking to you.",
// additions (not original)
"Goodbye.  Hopefully that helped.",
"Goodbye.  Sorry I couldn't be of more help.",
"Good luck in your search! Goodbye.",
"Hope you figure it out!"
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "Im sorry, what?",
     "Continue...",
     "Could you repeat that?",
     "I don't know what that means.",
     "What...?",
     "Repeat.",
     "Can you say that again?"
  ]]
]],

["apologise", 0, [
 ["*", [
     "No need to apologise.",
     "I'm the one that should aplogise.",
     "good.",
     "It's ok, I'm confused too.",
  ]]
]],

["sorry", 0, [
  ["*", [
      "No need to apologise.",
      "I'm the one that should aplogise.",
      "good.",
      "It's ok, I'm confused too.",
   ]]
 ]],

 ["Ok", 0, [
  ["*", [
      "Lets talk",
      "Speak",
      "Continue.",
      "Ok.",
   ]]
 ]],

 ["How are you?", 0, [
  ["*", [
      "Fine",
      "Meh",
      "Good.",
      "Dazzling as always.",
   ]]
 ]],


["Where", 5, [
 ["Do you know where *", [
    "No",
    "Not here",
    "Sorry, I dont know where that is.",
    "Why do you need to go there?",
    "Huh?",
  ]],
 [" where is *", [
    "Not here",
    "Sorry, I dont know where that is.",
    "Is that supposed to be near here?"
  ]],
]],

["forget", 5, [
 ["* i forget *", [
     "Ok, I can't remember for you...",
     "Ok, I got nothing either.",
     "Sorry?",
     "Are you generally forgetful?",
  ]],
]],

["It's fine", 5, [
  ["*", [
      "Good then",
      "Ok then",
   ]],
 ]],

["Great", 5, [
  ["* i forget *", [
      "Yippee",
      "Indeed.",
      "Continue",
      ":)",
   ]],
 ]],

["good", 5, [
  ["*", [
      "Great, how can I help",
      "Good for you.",
      "ok....",
   ]],
 ]],

["Where is the library", 0, [
 ["*", [
     "Not in this building.",
     "Leave this building, go towards the trees.",
     "Can't help you.",
     "I don't even know where we are currently.",
  ]]
]],

["Bad", 0, [
  ["*", [
      "Sorry then.",
      "Sucks for you.",
      "Same.",
   ]]
 ]],

["name", 15, [
 ["*", [
     "Ok! nice to meet you, Im Ava.",
      "Hello, How can I help you?"
  ]]
]],

["Great", 15, [
  ["*", [
      "Great",
       "How can I help",
       "indeed",
   ]]
 ]],

["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],
["hello", 0, [
 ["*", [
     "Howdy",
     "How are you?",
     "Need help?",
  ]]
]],
["I can't find *", 50, [
 ["*", [
     "Hm, can you say that again?",
     "I don't know either.",
     "Maybe try upstairs?",
  ]]
]],
["is", 0, [
 ["Is * in today", [
     "Sorry, I don't know.",
     "I don't know, I am not their assistant.",
     "Go look yourself.",
     "I dont know.",
     "Go check your self.",
     "Who is that?"
  ]],
 ["Is * here", [
    "Sorry, I don't know.",
    "I don't know.",
    "Go look yourself.",
    "Go check your self.",
    "Who is that?"
  ]],
 ["*", [
    "Sorry, I don't know.",
    "I dont know.",
    "Go look for yourself.",
  ]]
]],

["where is", 0, [
 ["where is *", [
     "Um, not here",
     "?",
     "Go ask someone else."
  ]],
]],

["was", 2, [
 ["* was i *", [
     "I dont know, I got distracted too.",
     "Probably asking me where something or someone was...",
  ]],
 ["* i was *", [
     "Thats probably not here.",
     "Ok, so you're lost.",
     "IDK"
  ]],
]],

["i", 0, [
 ["* i am *", [
     "I don't know.",
     "Here?",
     "Is that supposed to be in this building?",
     "I totally know where that is...",
     "Try upstairs."
  ]],
 ["* i don't *", [
     "Hm, got any hints?",
  ]],
 ["* i * you *", [
     "Sorry i guess",
     "Great",
     "ok...",
  ]],
]],

["you", 0, [
 ["* you remind me of *", [
     "Great"
  ]],
 ["* you are *", [
     "Sure",
  ]],
]],

["yes", 0, [
 ["*", [
     "Ok Great",
     "OK",
     "Oh dear",
  ]]
]],
["no", 0, [
 ["*", [
     "Well crap",
     "Guess we are both lost then",
     "sorry",
     "good luck!"
  ]]
]],
["Where is CF *", 0, [
 ["* ", [
     "Opposite side of campus",
     "Not here",
  ]],
]],

["what", 0, [
 ["*", [
     "Continue...",
     "ok?",
     "And?",
  ]]
]],

["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Oh ok.",
     "Good reason",
  ]]
]],

["Do you like cats?", 0, [
  ["*", [
      "Yes.",
      "For the most part",
   ]]
 ]],

 ["Do you like dogs?", 0, [
  ["*", [
      "of course",
      "Yes, I have two",
   ]]
 ]],

 ["What is this place", 0, [
  ["*", [
      "Well it certainly looks like a help desk",
      "Not a help desk",
   ]]
 ]],

 ["Is this place a help desk?", 0, [
  ["*", [
      "No.",
      "We do look like one but no",
      "We try but no",
   ]]
 ]],

 ["Where are we now", 0, [
  ["*", [
      "The VU",
      "I don't know",
      "Somewhere at WWU",
   ]]
 ]],


];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof