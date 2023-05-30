
// info from spreadsheet converted to javascript object
const images = [
  {
    "id": 105773,
    "file": "F2015110",
    "Florida Folk Festival": 45,
    "description": "Beseda dancers of Masaryktown posing at the Florida Folk Festival- White Springs, Florida",
    "year": 1992
  },
  {
    "id": 105775,
    "file": "F2015118",
    "Florida Folk Festival": 61,
    "description": "Barbara Simmons' performing dogs from her animal act at the Florida Folk Festival- White Springs, Florida",
    "year": 1992
  },
  {
    "id": 105776,
    "file": "F201512",
    "Florida Folk Festival": 55,
    "description": "Barbara Lentz performing her circus animal act at the Florida Folk Festival- White Springs, Florida",
    "year": 1992
  },
  {
    "id": 105780,
    "file": "F2015218",
    "Florida Folk Festival": 49,
    "description": "Beseda dancers of Masaryktown performing at the Florida Folk Festival- White Springs, Florida",
    "year": 1992
  },
  {
    "id": 105781,
    "file": "F201522",
    "Florida Folk Festival": 63,
    "description": "Beseda dancers of Masaryktown getting ready to perform at the Florida Folk Festival- White Springs, Florida",
    "year": 1992
  },
  {
    "id": 105782,
    "file": "F2015221",
    "Florida Folk Festival": 55,
    "description": "Czech Beseda dancers of Masaryktown performing at the Florida Folk Festival- White Springs, Florida",
    "year": 1992
  },
  {
    "id": 105783,
    "file": "F2015231",
    "Florida Folk Festival": 55,
    "description": "Czech Beseda dancers of Masaryktown performing at the Florida Folk Festival- White Springs, Florida",
    "year": 1992
  },
  {
    "id": 105784,
    "file": "F201529",
    "Florida Folk Festival": 49,
    "description": "Beseda dancers of Masaryktown performing at the Florida Folk Festival- White Springs, Florida",
    "year": 1992
  },
  {
    "id": 105805,
    "file": "F2018124",
    "Florida Folk Festival": 70,
    "description": "Wayne Martin (fiddle) and Doug Gauss (guitar) performing at the 1995 Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105806,
    "file": "F2018128",
    "Florida Folk Festival": 51,
    "description": "Hamilton County Mass Choir performing at the 1995 Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105807,
    "file": "F2018211",
    "Florida Folk Festival": 59,
    "description": "Cloggers perform to an accompanying guitarist at the 1995 Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105809,
    "file": "F201828",
    "Florida Folk Festival": 29,
    "description": "Cloggers posing at the 1995 Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105819,
    "file": "F2018336",
    "Florida Folk Festival": 40,
    "description": "Ned Johnson caning a chair at the 1995 Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 256217,
    "file": "F2018412B",
    "Florida Folk Festival": 51,
    "description": "Washboard Bill Cooke playing a \"banjo uke\" at the Florida Folk Festival - White Springs, Florida.",
    "year": 1995
  },
  {
    "id": 256216,
    "file": "F2018412C",
    "Florida Folk Festival": 51,
    "description": "Washboard Bill Cooke playing a \"banjo uke\" at the Florida Folk Festival - White Springs, Florida.",
    "year": 1995
  },
  {
    "id": 105822,
    "file": "F2018424",
    "Florida Folk Festival": 27,
    "description": "Peace Creek Review at the Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105823,
    "file": "F2018427",
    "Florida Folk Festival": 45,
    "description": "Yarko Antonevych playing the bandura at the Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105824,
    "file": "F2018432",
    "Florida Folk Festival": 31,
    "description": "Friends of Tammy Murry at the Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105825,
    "file": "F201844",
    "Florida Folk Festival": 34,
    "description": "Washboard Bill Cooke at the 1995 Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105827,
    "file": "F2018534",
    "Florida Folk Festival": 62,
    "description": "Folk singer and songwriter Eugenia Fitchen performing at the Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105829,
    "file": "F201858",
    "Florida Folk Festival": 49,
    "description": "Squirrelly Germs of Dade City performing at the Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105831,
    "file": "F2018612",
    "Florida Folk Festival": 82,
    "description": "Florida Secretary of State Sandra B. Mortham, left, with Frances Michaels at the Florida Folk Festival.",
    "year": 1995
  },
  {
    "id": 105833,
    "file": "F2018620",
    "Florida Folk Festival": 61,
    "description": "Rembranzas del Conico performing Cuban guajiro music at the Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105834,
    "file": "F201863",
    "Florida Folk Festival": 45,
    "description": "City of Dunedin Pipe Band performing at the Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105835,
    "file": "F201869",
    "Florida Folk Festival": 84,
    "description": "Martin (fiddle) and John Johnson competing in the old time fiddling contest at the Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105836,
    "file": "F2018714",
    "Florida Folk Festival": 49,
    "description": "Faye Baird playing the claw hammer banjo at the Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105837,
    "file": "F2018720",
    "Florida Folk Festival": 40,
    "description": "Ann and Frank Thomas performing at the Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105839,
    "file": "F2018732",
    "Florida Folk Festival": 40,
    "description": "Wayne Martin playing the fiddle at the Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105840,
    "file": "F201876",
    "Florida Folk Festival": 56,
    "description": "Wayne Martin (fiddle) and Doug Gauss performing at the Florida Folk Festival- White Springs, Florida",
    "year": 1995
  },
  {
    "id": 105902,
    "file": "F5161286",
    "Florida Folk Festival": 36,
    "description": "Eueline Jordan using a loom at the Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 105905,
    "file": "F5889121",
    "Florida Folk Festival": 49,
    "description": "Musical saw player Aubrey Dunscombe at the 1966 Florida Folk Festival- White Springs, Florida",
    "year": 1966
  },
  {
    "id": 105906,
    "file": "F5889123",
    "Florida Folk Festival": 34,
    "description": "Israeli folk dancers at the 1966 Florida Folk Festival- White Springs, Florida",
    "year": 1966
  },
  {
    "id": 105910,
    "file": "F6889144",
    "Florida Folk Festival": 34,
    "description": "Israeli folk dancers at the 1956 Florida Folk Festival- White Springs, Florida",
    "year": 1956
  },
  {
    "id": 105911,
    "file": "F6889145",
    "Florida Folk Festival": 34,
    "description": "Israeli folk dancers at the 1956 Florida Folk Festival- White Springs, Florida",
    "year": 1956
  },
  {
    "id": 105912,
    "file": "F6889146",
    "Florida Folk Festival": 34,
    "description": "Czech Beseda dancers at the 1956 Florida Folk Festival- White Springs, Florida",
    "year": 1956
  },
  {
    "id": 105914,
    "file": "F6889150",
    "Florida Folk Festival": 34,
    "description": "Czech Beseda dancers at the 1956 Florida Folk Festival- White Springs, Florida",
    "year": 1956
  },
  {
    "id": 105939,
    "file": "F6889197",
    "Florida Folk Festival": 36,
    "description": "Thelma Boltin speaking at the 1956 Florida Folk Festival- White Springs, Florida",
    "year": 1956
  },
  {
    "id": 105941,
    "file": "F6889200",
    "Florida Folk Festival": 59,
    "description": "Joe Tomazin from Samsula playing an accordion at the 1956 Florida Folk Festival - White Springs, Florida",
    "year": 1956
  },
  {
    "id": 105974,
    "file": "F6889250",
    "Florida Folk Festival": 79,
    "description": "Minorcan American Kenneth Pacetti of St. Augustine playing guitar at the 1956 Florida Folk Festival - White Springs, Florida",
    "year": 1956
  },
  {
    "id": 105982,
    "file": "F6889265",
    "Florida Folk Festival": 47,
    "description": "Trenton, Florida, FFA String Band at the 1956 Florida Folk Festival- White Springs, Florida",
    "year": 1956
  },
  {
    "id": 105987,
    "file": "F6889273",
    "Florida Folk Festival": 64,
    "description": "Guitarist from the Branford String Band performing at the 1956 Florida Folk Festival- White Springs, Florida",
    "year": 1956
  },
  {
    "id": 105988,
    "file": "F6889274",
    "Florida Folk Festival": 45,
    "description": "Branford String Band performing at the 1956 Florida Folk Festival- White Springs, Florida",
    "year": 1956
  },
  {
    "id": 105998,
    "file": "F6889291",
    "Florida Folk Festival": 51,
    "description": "Stanley Hester of Gainesville singing at the 1956 Florida Folk Festival - White Springs, Florida",
    "year": 1956
  },
  {
    "id": 106005,
    "file": "F6889299",
    "Florida Folk Festival": 49,
    "description": "Old Town FFA String Band performing at the 1956 Florida Folk Festival- White Springs, Florida",
    "year": 1956
  },
  {
    "id": 106019,
    "file": "F6889319",
    "Florida Folk Festival": 57,
    "description": "Archie Lee, Thelma Boltin, and Alton Morris at the 1956 Florida Folk Festival- White Springs, Florida",
    "year": 1956
  },
  {
    "id": 106021,
    "file": "F6889324",
    "Florida Folk Festival": 60,
    "description": "Fiddler Zeke Stephens of Marianna performs during the 1956 Florida Folk Festival- White Springs, Florida",
    "year": 1956
  },
  {
    "id": 106022,
    "file": "F6889325",
    "Florida Folk Festival": 60,
    "description": "Fiddler Zeke Stephens of Marianna performs during the 1956 Florida Folk Festival- White Springs, Florida",
    "year": 1956
  },
  {
    "id": 106027,
    "file": "F851572",
    "Florida Folk Festival": 36,
    "description": "Day School Rhythm Band at the 1958 Florida Folk Festival- White Springs, Florida",
    "year": 1958
  },
  {
    "id": 106035,
    "file": "F889471",
    "Florida Folk Festival": 27,
    "description": "Thelma Boltin at the 1957 Florida Folk Festival- White Springs, Florida",
    "year": 1957
  },
  {
    "id": 106051,
    "file": "F8896216",
    "Florida Folk Festival": 46,
    "description": "Lake City Squares square dancing at the 1962 Florida Folk Festival- White Springs, Florida",
    "year": 1962
  },
  {
    "id": 106054,
    "file": "F889622",
    "Florida Folk Festival": 36,
    "description": "Eueline Jordan using a loom at the Florida Folk Festival- White Springs, Florida",
    "year": 1962
  },
  {
    "id": 107348,
    "file": "FA0117",
    "Florida Folk Festival": 26,
    "description": "Willie James performs at Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107349,
    "file": "FA0118",
    "Florida Folk Festival": 26,
    "description": "Mary McClain performs at Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107350,
    "file": "FA0119",
    "Florida Folk Festival": 26,
    "description": "Mary McClain performs at Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107352,
    "file": "FA0121",
    "Florida Folk Festival": 26,
    "description": "Willie James performs at Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107353,
    "file": "FA0122",
    "Florida Folk Festival": 35,
    "description": "Willie James with Mary McClain at Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107356,
    "file": "FA0125",
    "Florida Folk Festival": 25,
    "description": "Bill Monroe performs at Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107362,
    "file": "FA0131",
    "Florida Folk Festival": 63,
    "description": "Close up of Bill Monroe and the Blue Grass Boys performing at Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107376,
    "file": "FA0146",
    "Florida Folk Festival": 52,
    "description": "Bill Monroe with the Blue Grass Boys performing at Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107377,
    "file": "FA0147",
    "Florida Folk Festival": 20,
    "description": "Bill Monroe at the Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107378,
    "file": "FA0148",
    "Florida Folk Festival": 20,
    "description": "Bill Monroe at the Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107381,
    "file": "FA0151",
    "Florida Folk Festival": 31,
    "description": "Robert Bowlin performs at the Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107387,
    "file": "FA0157",
    "Florida Folk Festival": 31,
    "description": "Bill Monroe performing at the Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107402,
    "file": "FA0170",
    "Florida Folk Festival": 48,
    "description": "Richard Seaman and Jack Piccalo perform at the Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107404,
    "file": "FA0172",
    "Florida Folk Festival": 32,
    "description": "Richard Seaman performs at the Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107405,
    "file": "FA0173",
    "Florida Folk Festival": 30,
    "description": "Jack Piccalo performs at the Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107409,
    "file": "FA0177",
    "Florida Folk Festival": 26,
    "description": "Mary McClain performs at Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107412,
    "file": "FA0180",
    "Florida Folk Festival": 30,
    "description": "Clarence \"Tater\" Tate at the Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107413,
    "file": "FA0181",
    "Florida Folk Festival": 19,
    "description": "Tom Walton at the Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107414,
    "file": "FA0182",
    "Florida Folk Festival": 19,
    "description": "Tom Walton at the Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107420,
    "file": "FA0188",
    "Florida Folk Festival": 43,
    "description": "Liz Pennock, Elan Chalford and VGO at the Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107422,
    "file": "FA0190",
    "Florida Folk Festival": 31,
    "description": "Pierce Pettis performs at the Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 107423,
    "file": "FA0191",
    "Florida Folk Festival": 31,
    "description": "Pierce Pettis performs at the Florida Folk Festival - White Springs, Florida .",
    "year": "May 29, 1993"
  },
  {
    "id": 106525,
    "file": "FA127111",
    "Florida Folk Festival": 80,
    "description": "Suzanne Register, from Reddick, offering ground cornmeal and grits at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106527,
    "file": "FA127117",
    "Florida Folk Festival": 63,
    "description": "Ana Mercedes Rodriguez de Diaz using lace bobbins at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106530,
    "file": "FA12715",
    "Florida Folk Festival": 47,
    "description": "Lance Leonard making coconut palm hats at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106531,
    "file": "FA12716",
    "Florida Folk Festival": 35,
    "description": "Woman spinning cotton at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106532,
    "file": "FA12717",
    "Florida Folk Festival": 74,
    "description": "Karen Nichols of Jacksonville demonstrating how to make rope at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106534,
    "file": "FA127210",
    "Florida Folk Festival": 56,
    "description": "Marcia McCrory displaying her wheat woven items at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106535,
    "file": "FA127215",
    "Florida Folk Festival": 38,
    "description": "Seminole women making baskets at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106536,
    "file": "FA127218",
    "Florida Folk Festival": 38,
    "description": "Man playing hammered dulcimer at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106538,
    "file": "FA12726",
    "Florida Folk Festival": 36,
    "description": "Home-made brooms on display at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106540,
    "file": "FA127314",
    "Florida Folk Festival": 29,
    "description": "Man making dulcimers at the Florida Folk Festival - White Springs, Florida.",
    "year": 1990
  },
  {
    "id": 106541,
    "file": "FA127315",
    "Florida Folk Festival": 42,
    "description": "Marcia McCrory weaving some wheat at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106542,
    "file": "FA127316",
    "Florida Folk Festival": 41,
    "description": "Musicians playing carnival music at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106543,
    "file": "FA12733",
    "Florida Folk Festival": 43,
    "description": "Greek Epiphany traditions workshop at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106555,
    "file": "FA12812",
    "Florida Folk Festival": 41,
    "description": "Musicians playing carnival music at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106556,
    "file": "FA128120",
    "Florida Folk Festival": 34,
    "description": "African crafts on display at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106560,
    "file": "FA128235",
    "Florida Folk Festival": 31,
    "description": "Woman displaying herbs at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106561,
    "file": "FA128236",
    "Florida Folk Festival": 49,
    "description": "Yarn crafted items with beads on display at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106563,
    "file": "FA128321",
    "Florida Folk Festival": 34,
    "description": "Greek costumes on display at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106566,
    "file": "FA128422",
    "Florida Folk Festival": 40,
    "description": "Hungarian embroidery being done at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106568,
    "file": "FA128432",
    "Florida Folk Festival": 43,
    "description": "J.P. \"Curly\" Dekle braiding a whip at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106569,
    "file": "FA128433",
    "Florida Folk Festival": 30,
    "description": "Woman carding by hand at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106571,
    "file": "FA128435",
    "Florida Folk Festival": 41,
    "description": "Dan Townsend making shell cameos at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 106632,
    "file": "FA132415",
    "Florida Folk Festival": 40,
    "description": "People playing Irish music at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1991"
  },
  {
    "id": 106636,
    "file": "FA13247",
    "Florida Folk Festival": 40,
    "description": "People playing Irish music at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1991"
  },
  {
    "id": 106644,
    "file": "FA133111",
    "Florida Folk Festival": 58,
    "description": "Harold Pelote playing calypso music on drums at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 106645,
    "file": "FA133115",
    "Florida Folk Festival": 61,
    "description": "Key West Island Junkanoos playing calypso music at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 106646,
    "file": "FA133119",
    "Florida Folk Festival": 47,
    "description": "Glen Addisson tossing bale of hay at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 106649,
    "file": "FA13314",
    "Florida Folk Festival": 46,
    "description": "Buddy Chavez playing conga drums at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 106650,
    "file": "FA13319",
    "Florida Folk Festival": 46,
    "description": "Danny Acosta playing conga drums at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 106652,
    "file": "FA133233",
    "Florida Folk Festival": 62,
    "description": "Jesus Rodriguez and Cecilia Santos playing music at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 106655,
    "file": "FA13332",
    "Florida Folk Festival": 78,
    "description": "Cayo Hueso Comparsas dancing to the music of Danny Acosta's band at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 106656,
    "file": "FA13338",
    "Florida Folk Festival": 42,
    "description": "Cayo Hueso Comparsas dancing at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 106658,
    "file": "FA133426",
    "Florida Folk Festival": 50,
    "description": "Danny Acosta's comparsa band playing at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 106659,
    "file": "FA133432",
    "Florida Folk Festival": 42,
    "description": "Cayo Hueso Comparsas dancing at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 106668,
    "file": "FA13421",
    "Florida Folk Festival": 84,
    "description": "People giving an autoharp performance at the Stephen Foster Center during the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 106671,
    "file": "FA13427",
    "Florida Folk Festival": 84,
    "description": "Tampa Blue and apprentices performing at the Stephen Foster Center during the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 106683,
    "file": "FA135310",
    "Florida Folk Festival": 74,
    "description": "Unidentified woman performing crafts with her spinning-wheel at the 1992 Florida Folk Festival - White Springs, Florida",
    "year": 1992
  },
  {
    "id": 106859,
    "file": "FA151011",
    "Florida Folk Festival": 47,
    "description": "Gandy dancers performing railroad work at the Florida Folk Festival- White Springs, Florida",
    "year": "May 25, 1993"
  },
  {
    "id": 106860,
    "file": "FA151012",
    "Florida Folk Festival": 47,
    "description": "Gandy dancers performing railroad work at the Florida Folk Festival- White Springs, Florida",
    "year": "May 25, 1993"
  },
  {
    "id": 106862,
    "file": "FA1510215",
    "Florida Folk Festival": 17,
    "description": "Acrobats at the Florida Folk Festival- White Springs, Florida",
    "year": "1995 (circa)"
  },
  {
    "id": 106863,
    "file": "FA1510222",
    "Florida Folk Festival": 17,
    "description": "Acrobats at the Florida Folk Festival- White Springs, Florida",
    "year": "1995 (circa)"
  },
  {
    "id": 106864,
    "file": "FA151052",
    "Florida Folk Festival": 16,
    "description": "Dancers at the Florida Folk Festival- White Springs, Florida",
    "year": "1995 (circa)"
  },
  {
    "id": 106867,
    "file": "FA1510628",
    "Florida Folk Festival": 47,
    "description": "Gandy dancers performing railroad work at the Florida Folk Festival- White Springs, Florida",
    "year": "May 25, 1993"
  },
  {
    "id": 106868,
    "file": "FA1510631",
    "Florida Folk Festival": 22,
    "description": "Gandy dancers at the Florida Folk Festival- White Springs, Florida",
    "year": "May 25, 1993"
  },
  {
    "id": 106869,
    "file": "FA1510634",
    "Florida Folk Festival": 47,
    "description": "Gandy dancers performing railroad work at the Florida Folk Festival- White Springs, Florida",
    "year": "May 25, 1993"
  },
  {
    "id": 107059,
    "file": "FA1678",
    "Florida Folk Festival": 39,
    "description": "African American singing group at the Florida Folk Festival- White Springs, Florida",
    "year": "1989 (circa)"
  },
  {
    "id": 109293,
    "file": "FA3346A",
    "Florida Folk Festival": 49,
    "description": "Girls performing Irish folk dancing at the 1970 Florida Folk Festival - White Springs, Florida.",
    "year": 1970
  },
  {
    "id": 109384,
    "file": "FA3496",
    "Florida Folk Festival": 63,
    "description": "Bluegrass fiddler \"Chubby\" Anthony and band performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109388,
    "file": "FA3500",
    "Florida Folk Festival": 53,
    "description": "Doc McConnell 's Old Time Medicine Show at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109389,
    "file": "FA3501",
    "Florida Folk Festival": 59,
    "description": "Doc McConnell with his Old Time Medicine Show at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109390,
    "file": "FA3502",
    "Florida Folk Festival": 37,
    "description": "The Sawgrass Boys performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109391,
    "file": "FA3503",
    "Florida Folk Festival": 37,
    "description": "The Sawgrass Boys performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109392,
    "file": "FA3504",
    "Florida Folk Festival": 37,
    "description": "The Sawgrass Boys performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109393,
    "file": "FA3505",
    "Florida Folk Festival": 37,
    "description": "The Sawgrass Boys performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109395,
    "file": "FA3507",
    "Florida Folk Festival": 57,
    "description": "Grady Thompson and The Good Guys performing at the 1970 Florida Folk Festival - White Springs, Florida",
    "year": 1970
  },
  {
    "id": 109396,
    "file": "FA3508",
    "Florida Folk Festival": 74,
    "description": "Grady, right, and Chris Thompson of The Good Guys performing at the 1971 Florida Folk Festival - White Springs, Florida",
    "year": 1971
  },
  {
    "id": 109397,
    "file": "FA3509",
    "Florida Folk Festival": 75,
    "description": "The Bordeaux Brothers with Gordon and Dottie Mason performing at the 1970 Florida Folk Festival - White Springs, Florida.",
    "year": 1970
  },
  {
    "id": 109398,
    "file": "FA3510",
    "Florida Folk Festival": 55,
    "description": "Coolidge (Ga.) Elementary School group singing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109399,
    "file": "FA3511",
    "Florida Folk Festival": 47,
    "description": "Trenton (Florida) School group singing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109400,
    "file": "FA3512",
    "Florida Folk Festival": 71,
    "description": "Jacksonville's Beaver Street Baptist Church group singing at the 1957 Florida Folk Festival - White Springs, Florida",
    "year": 1957
  },
  {
    "id": 109401,
    "file": "FA3513",
    "Florida Folk Festival": 65,
    "description": "Hoboken School Chorus from Hoboken, Georgia singing at the 1957 Florida Folk Festival - White Springs, Florida",
    "year": 1957
  },
  {
    "id": 109402,
    "file": "FA3514",
    "Florida Folk Festival": 81,
    "description": "Byzantine Choir from the Greek Orthodox Church of Tarpon Springs singing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109403,
    "file": "FA3515",
    "Florida Folk Festival": 68,
    "description": "New Stanton High School Chorus from Jacksonville performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109404,
    "file": "FA3516",
    "Florida Folk Festival": 59,
    "description": "Carver School chorus from White Springs performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109405,
    "file": "FA3517",
    "Florida Folk Festival": 78,
    "description": "Dixie Hollins High School Folk Singers from St. Petersburg performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109406,
    "file": "FA3518",
    "Florida Folk Festival": 64,
    "description": "McCrabbe Church Gospel Singers of Cross City performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109407,
    "file": "FA3519",
    "Florida Folk Festival": 49,
    "description": "Vocal group singing barbershop harmonies at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109408,
    "file": "FA3520",
    "Florida Folk Festival": 56,
    "description": "Trenton Elementary School group performing at the 1966 Florida Folk Festival - White Springs, Florida",
    "year": 1966
  },
  {
    "id": 109409,
    "file": "FA3521",
    "Florida Folk Festival": 77,
    "description": "Kirby-Smith Elementary School group from Gainesville performing at the 1966 Florida Folk Festival - White Springs, Florida",
    "year": 1966
  },
  {
    "id": 109410,
    "file": "FA3522",
    "Florida Folk Festival": 77,
    "description": "Kirby-Smith Elementary School group from Gainesville performing at the 1966 Florida Folk Festival - White Springs, Florida",
    "year": 1966
  },
  {
    "id": 109411,
    "file": "FA3523",
    "Florida Folk Festival": 78,
    "description": "Minnie J. Niblack Elementary School Singers from Lake City performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109412,
    "file": "FA3524",
    "Florida Folk Festival": 59,
    "description": "Highlands Elementary School Boys Chorus performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109413,
    "file": "FA3525",
    "Florida Folk Festival": 70,
    "description": "Littlewood Elementary School Chorus of Gainesville performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109414,
    "file": "FA3526",
    "Florida Folk Festival": 65,
    "description": "Hoboken School Chorus from Hoboken, Georgia singing at the 1957 Florida Folk Festival - White Springs, Florida",
    "year": 1957
  },
  {
    "id": 109415,
    "file": "FA3527",
    "Florida Folk Festival": 39,
    "description": "Conductor leading church choir at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109416,
    "file": "FA3528",
    "Florida Folk Festival": 26,
    "description": "Children's chorus at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109417,
    "file": "FA3529",
    "Florida Folk Festival": 22,
    "description": "Girls singing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109418,
    "file": "FA3530",
    "Florida Folk Festival": 26,
    "description": "Children's chorus at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109419,
    "file": "FA3531",
    "Florida Folk Festival": 35,
    "description": "Children playing recorders at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109420,
    "file": "FA3532",
    "Florida Folk Festival": 44,
    "description": "Elementary school chorus performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109421,
    "file": "FA3533",
    "Florida Folk Festival": 38,
    "description": "High school chorus performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109422,
    "file": "FA3534",
    "Florida Folk Festival": 47,
    "description": "School chorus and orchestra performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109426,
    "file": "FA3537",
    "Florida Folk Festival": 37,
    "description": "Children's chorus performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109427,
    "file": "FA3538",
    "Florida Folk Festival": 33,
    "description": "Singing group performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109428,
    "file": "FA3539",
    "Florida Folk Festival": 37,
    "description": "Children's chorus performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109429,
    "file": "FA3540",
    "Florida Folk Festival": 38,
    "description": "High school chorus performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109430,
    "file": "FA3541",
    "Florida Folk Festival": 38,
    "description": "High school chorus performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109431,
    "file": "FA3542",
    "Florida Folk Festival": 32,
    "description": "Youth chorus performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109432,
    "file": "FA3543",
    "Florida Folk Festival": 37,
    "description": "Young men's choir performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109433,
    "file": "FA3544",
    "Florida Folk Festival": 32,
    "description": "Youth chorus performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109434,
    "file": "FA3545",
    "Florida Folk Festival": 70,
    "description": "Mt. Carmel Baptist Church Choir #1 of Palatka performing at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109435,
    "file": "FA3546",
    "Florida Folk Festival": 72,
    "description": "Vera and Rosco Deckard, \"The Singing Deckards\", performing at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109436,
    "file": "FA3547",
    "Florida Folk Festival": 66,
    "description": "Rufus Adams of Mayo making a corn shuck chair bottom at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109439,
    "file": "FA3550",
    "Florida Folk Festival": 55,
    "description": "Lynn Bernstine practicing the craft of macrame at the Florida Folk Festival.",
    "year": 1971
  },
  {
    "id": 109442,
    "file": "FA3553",
    "Florida Folk Festival": 49,
    "description": "Jessie Coker demonstrating spinning at the 1959 Florida Folk Festival - White Springs, Florida",
    "year": 1959
  },
  {
    "id": 109443,
    "file": "FA3554",
    "Florida Folk Festival": 30,
    "description": "Jessie Coker spinning at the Florida Folk Festival - White Springs, Florida",
    "year": "1950 (circa)"
  },
  {
    "id": 109445,
    "file": "FA3556",
    "Florida Folk Festival": 49,
    "description": "Jessie Coker demonstrating spinning at the 1959 Florida Folk Festival - White Springs, Florida",
    "year": 1959
  },
  {
    "id": 109447,
    "file": "FA3558",
    "Florida Folk Festival": 55,
    "description": "Jessie Coker showing spun thread to girls at the 1959 Florida Folk Festival - White Springs, Florida",
    "year": 1959
  },
  {
    "id": 109448,
    "file": "FA3559",
    "Florida Folk Festival": 49,
    "description": "Jessie Coker demonstrating spinning at the 1959 Florida Folk Festival - White Springs, Florida",
    "year": 1959
  },
  {
    "id": 109449,
    "file": "FA3560",
    "Florida Folk Festival": 49,
    "description": "Jessie Coker demonstrating spinning at the 1959 Florida Folk Festival - White Springs, Florida",
    "year": 1959
  },
  {
    "id": 109450,
    "file": "FA3561",
    "Florida Folk Festival": 44,
    "description": "Jessie Coker demonstrating spinning at the Florida Folk Festival - White Springs, Florida",
    "year": "1950 (circa)"
  },
  {
    "id": 109452,
    "file": "FA3563",
    "Florida Folk Festival": 58,
    "description": "Jessie Coker demonstrating spinning to girls at the 1959 Florida Folk Festival - White Springs, Florida",
    "year": 1959
  },
  {
    "id": 109453,
    "file": "FA3564",
    "Florida Folk Festival": 82,
    "description": "Faustino and Consuelo Fernandez of Tampa demonstrating cigar rolling at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109454,
    "file": "FA3565",
    "Florida Folk Festival": 76,
    "description": "Hammer saw craftsman W. H. Hammack of Jasper setting saw teeth at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109456,
    "file": "FA3567",
    "Florida Folk Festival": 78,
    "description": "Guitar maker Manuel Fraguela of Jacksonville showing his guitars at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109457,
    "file": "FA3568",
    "Florida Folk Festival": 55,
    "description": "Luthier Allen Chester showing his guitars at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109458,
    "file": "FA3569",
    "Florida Folk Festival": 71,
    "description": "Craftsman Gino Cavaceppi providing violin making demonstration at the Florida Folk Festival in White Springs.",
    "year": "1972 (circa)"
  },
  {
    "id": 109460,
    "file": "FA3571",
    "Florida Folk Festival": 52,
    "description": "Crab trap maker George Torres of Tampa at the 1980 Florida Folk Festival - White Springs, Florida",
    "year": 1980
  },
  {
    "id": 109461,
    "file": "FA3572",
    "Florida Folk Festival": 31,
    "description": "Quilting demonstration at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109462,
    "file": "FA3573",
    "Florida Folk Festival": 31,
    "description": "Quilting demonstration at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109463,
    "file": "FA3574",
    "Florida Folk Festival": 31,
    "description": "Quilting demonstration at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109464,
    "file": "FA3575",
    "Florida Folk Festival": 31,
    "description": "Quilting demonstration at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109466,
    "file": "FA3576",
    "Florida Folk Festival": 42,
    "description": "Quilting demonstration with music at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109467,
    "file": "FA3577",
    "Florida Folk Festival": 43,
    "description": "Quilting and weaving demonstration at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109469,
    "file": "FA3579",
    "Florida Folk Festival": 59,
    "description": "Queenie Udell demonstrating yoyo quilt making at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109471,
    "file": "FA3581",
    "Florida Folk Festival": 56,
    "description": "Paul Greene of Cocoa carving wood figurine at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109472,
    "file": "FA3582",
    "Florida Folk Festival": 33,
    "description": "Park ranger carving wood at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109473,
    "file": "FA3582A",
    "Florida Folk Festival": 47,
    "description": "Reverend A.S. Barrows whittling a cane at the Florida Folk Festival - White Springs, Florida",
    "year": 1958
  },
  {
    "id": 109474,
    "file": "FA3583",
    "Florida Folk Festival": 49,
    "description": "Barbara Brown selling jumping jacks at the 1971 Florida Folk Festival - White Springs, Florida.",
    "year": 1971
  },
  {
    "id": 109475,
    "file": "FA3584",
    "Florida Folk Festival": 39,
    "description": "Man demonstrating wood turning at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109476,
    "file": "FA3585",
    "Florida Folk Festival": 34,
    "description": "Man carving wood figurine at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109477,
    "file": "FA3586",
    "Florida Folk Festival": 22,
    "description": "Man whittling at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109478,
    "file": "FA3587",
    "Florida Folk Festival": 59,
    "description": "Susan Frisbee with her animal jig-saw puzzles at the 1973 Florida Folk Festival - White Springs, Florida.",
    "year": 1973
  },
  {
    "id": 109480,
    "file": "FA3589",
    "Florida Folk Festival": 79,
    "description": "Jerry Psenka of the Beseda Club of Masaryktown Dancers performing at the 1959 Florida Folk Festival - White Springs, Florida",
    "year": 1959
  },
  {
    "id": 109481,
    "file": "FA3590",
    "Florida Folk Festival": 49,
    "description": "Beseda dancers of Masaryktown performing at the Florida Folk Festival - White Springs, Florida",
    "year": 1959
  },
  {
    "id": 109482,
    "file": "FA3591",
    "Florida Folk Festival": 34,
    "description": "Beseda dancers performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109483,
    "file": "FA3592",
    "Florida Folk Festival": 54,
    "description": "Beseda Club of Masaryktown dancers performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1950 (circa)"
  },
  {
    "id": 109484,
    "file": "FA3593",
    "Florida Folk Festival": 54,
    "description": "Beseda Club of Masaryktown dancers performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1950 (circa)"
  },
  {
    "id": 109485,
    "file": "FA3594",
    "Florida Folk Festival": 54,
    "description": "Beseda Club of Masaryktown dancers performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1950 (circa)"
  },
  {
    "id": 109486,
    "file": "FA3596",
    "Florida Folk Festival": 59,
    "description": "Beseda Club of Masaryktown dancers performing at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109489,
    "file": "FA3599",
    "Florida Folk Festival": 59,
    "description": "Beseda Club of Masaryktown dancers performing at the 1960 Florida Folk Festival - White Springs, Florida",
    "year": 1960
  },
  {
    "id": 109490,
    "file": "FA3600",
    "Florida Folk Festival": 54,
    "description": "Beseda Club of Masaryktown dancers performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109491,
    "file": "FA3601",
    "Florida Folk Festival": 59,
    "description": "Beseda Club of Masaryktown dancers performing at the 1960 Florida Folk Festival - White Springs, Florida",
    "year": 1960
  },
  {
    "id": 109494,
    "file": "FA3604",
    "Florida Folk Festival": 73,
    "description": "Boy Scouts preparing to perform ceremonial Native American dance at the Florida Folk Festival - White Springs, Florida.",
    "year": "1966 (circa)"
  },
  {
    "id": 109502,
    "file": "FA3612",
    "Florida Folk Festival": 85,
    "description": "North Florida Council, Boy Scouts Echocotee Lodge Dance Team performing at the 1966 Florida Folk Festival - White Springs, Florida.",
    "year": 1966
  },
  {
    "id": 109505,
    "file": "FA3615",
    "Florida Folk Festival": 62,
    "description": "Boy Scout performing ceremonial Native American dance at the Florida Folk Festival - White Springs, Florida.",
    "year": "1966 (circa)"
  },
  {
    "id": 109508,
    "file": "FA3617A",
    "Florida Folk Festival": 57,
    "description": "Big Bend Folk Band from Tallahassee playing at the 1963 Florida Folk Festival - White Springs, Florida",
    "year": 1963
  },
  {
    "id": 109509,
    "file": "FA3618",
    "Florida Folk Festival": 80,
    "description": "John T. Greene and the Big Bend Folk Band from Tallahassee playing at the 1963 Florida Folk Festival - White Springs, Florida",
    "year": 1963
  },
  {
    "id": 109512,
    "file": "FA3619A",
    "Florida Folk Festival": 34,
    "description": "Cambodian American dancer at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109513,
    "file": "FA3620",
    "Florida Folk Festival": 57,
    "description": "Big Bend Folk Band from Tallahassee playing at the 1963 Florida Folk Festival - White Springs, Florida",
    "year": 1963
  },
  {
    "id": 109514,
    "file": "FA3620A",
    "Florida Folk Festival": 45,
    "description": "Cross Creek Cloggers performing at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109515,
    "file": "FA3621",
    "Florida Folk Festival": 70,
    "description": "Jack Haslam, at right, and the Big Bend Ramblers playing at the 1970 Florida Folk Festival - White Springs, Florida.",
    "year": 1970
  },
  {
    "id": 109517,
    "file": "FA3622",
    "Florida Folk Festival": 69,
    "description": "Jack Haslam, at left, and the Big Bend Ramblers playing at the 1969 Florida Folk Festival - White Springs, Florida.",
    "year": 1969
  },
  {
    "id": 109520,
    "file": "FA3623A",
    "Florida Folk Festival": 25,
    "description": "Cloggers dancing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109522,
    "file": "FA3624A",
    "Florida Folk Festival": 25,
    "description": "Cloggers dancing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109524,
    "file": "FA3625A",
    "Florida Folk Festival": 25,
    "description": "Cloggers dancing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109526,
    "file": "FA3626A",
    "Florida Folk Festival": 28,
    "description": "Cloggers performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109528,
    "file": "FA3627A",
    "Florida Folk Festival": 80,
    "description": "Spring Park School fifth grade cloggers of Jacksonville performing at the 1957 Florida Folk Festival - White Springs, Florida",
    "year": 1957
  },
  {
    "id": 109530,
    "file": "FA3628A",
    "Florida Folk Festival": 65,
    "description": "Cuban American dancers from Jacksonville performing at the 1972 Florida Folk Festival - White Springs, Florida",
    "year": 1972
  },
  {
    "id": 109533,
    "file": "FA3630A",
    "Florida Folk Festival": 67,
    "description": "Cuban American musicians from Jacksonville performing at the 1972 Florida Folk Festival - White Springs, Florida",
    "year": 1972
  },
  {
    "id": 109534,
    "file": "FA3631",
    "Florida Folk Festival": 51,
    "description": "Recreation of a brush arbor church service at the Florida Folk Festival - White Springs, Florida.",
    "year": "1954 (circa)"
  },
  {
    "id": 109535,
    "file": "FA3631A",
    "Florida Folk Festival": 65,
    "description": "Cuban American dancers from Jacksonville performing at the 1972 Florida Folk Festival - White Springs, Florida",
    "year": 1972
  },
  {
    "id": 109537,
    "file": "FA3632A",
    "Florida Folk Festival": 75,
    "description": "University of Florida Dutch international students performing at the 1957 Florida Folk Festival - White Springs, Florida",
    "year": 1957
  },
  {
    "id": 109538,
    "file": "FA3633",
    "Florida Folk Festival": 58,
    "description": "Greek dancers from Tarpon Springs performing at the 1976 Florida Folk Festival - White Springs, Florida",
    "year": 1976
  },
  {
    "id": 109539,
    "file": "FA3633A",
    "Florida Folk Festival": 51,
    "description": "Recreation of a brush arbor church service at the Florida Folk Festival - White Springs, Florida.",
    "year": "1954 (circa)"
  },
  {
    "id": 109540,
    "file": "FA3634",
    "Florida Folk Festival": 63,
    "description": "Greek Boy Scout dancers from Tarpon Springs performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1960 (circa)"
  },
  {
    "id": 109541,
    "file": "FA3634A",
    "Florida Folk Festival": 51,
    "description": "Recreation of a brush arbor church service at the Florida Folk Festival - White Springs, Florida.",
    "year": "1954 (circa)"
  },
  {
    "id": 109542,
    "file": "FA3635",
    "Florida Folk Festival": 55,
    "description": "Greek Orthodox priest speaks as choir looks on at the Florida Folk Festival - White Springs, Florida.",
    "year": "1960 (circa)"
  },
  {
    "id": 109543,
    "file": "FA3635A",
    "Florida Folk Festival": 64,
    "description": "The Abundant Life Singers of Clearwater performing at the 1976 Florida Folk Festival - White Springs, Florida.",
    "year": 1976
  },
  {
    "id": 109544,
    "file": "FA3636",
    "Florida Folk Festival": 73,
    "description": "Byzantine Choir of the Greek Orthodox Church from Tarpon Springs at the Florida Folk Festival - White Springs, Florida.",
    "year": "1960 (circa)"
  },
  {
    "id": 271420,
    "file": "FA3636A",
    "Florida Folk Festival": 64,
    "description": "The Abundant Life Singers of Clearwater performing at the 1976 Florida Folk Festival - White Springs, Florida.",
    "year": 1976
  },
  {
    "id": 109545,
    "file": "FA3637",
    "Florida Folk Festival": 38,
    "description": "Greek dancers performing at the 1976 Florida Folk Festival - White Springs, Florida.",
    "year": 1976
  },
  {
    "id": 109547,
    "file": "FA3638A",
    "Florida Folk Festival": 64,
    "description": "The Abundant Life Singers of Clearwater performing at the 1974 Florida Folk Festival - White Springs, Florida.",
    "year": 1974
  },
  {
    "id": 109549,
    "file": "FA3639A",
    "Florida Folk Festival": 64,
    "description": "The Abundant Life Singers of Clearwater performing at the 1974 Florida Folk Festival - White Springs, Florida.",
    "year": 1974
  },
  {
    "id": 109550,
    "file": "FA3639B",
    "Florida Folk Festival": 32,
    "description": "Young girl hula dancing at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109553,
    "file": "FA3641",
    "Florida Folk Festival": 64,
    "description": "The Abundant Life Singers of Clearwater performing at the 1974 Florida Folk Festival - White Springs, Florida.",
    "year": 1974
  },
  {
    "id": 109555,
    "file": "FA3642",
    "Florida Folk Festival": 73,
    "description": "Tony Reddick, Reatha Pearl Marshall and children performing at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 109556,
    "file": "FA3642A",
    "Florida Folk Festival": 38,
    "description": "Girls in elf costumes dancing at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109557,
    "file": "FA3643",
    "Florida Folk Festival": 39,
    "description": "Sacred Harp singers performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109558,
    "file": "FA3643A",
    "Florida Folk Festival": 38,
    "description": "Girls in elf costumes dancing at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109559,
    "file": "FA3644",
    "Florida Folk Festival": 32,
    "description": "Reverend N. L. Williams at the Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109560,
    "file": "FA3644A",
    "Florida Folk Festival": 27,
    "description": "Irish Folk dancing at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109562,
    "file": "FA3645A",
    "Florida Folk Festival": 43,
    "description": "Portrait of Irish folk dance group at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109563,
    "file": "FA3646A",
    "Florida Folk Festival": 64,
    "description": "Craftsman Kjell Lunestad demonstrating woodcarving at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109564,
    "file": "FA3647",
    "Florida Folk Festival": 35,
    "description": "Israeli dancers performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109565,
    "file": "FA3647A",
    "Florida Folk Festival": 64,
    "description": "Craftsman Kjell Lunestad demonstrating woodcarving at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109566,
    "file": "FA3648",
    "Florida Folk Festival": 40,
    "description": "Israeli dancers performing at the 1960 Florida Folk Festival - White Springs, Florida",
    "year": 1960
  },
  {
    "id": 109567,
    "file": "FA3648A",
    "Florida Folk Festival": 77,
    "description": "Craftsman Bill Nichols of Orange Park demonstrating woodworking at the 1980 Florida Folk Festival - White Springs, Florida",
    "year": 1980
  },
  {
    "id": 109568,
    "file": "FA3649",
    "Florida Folk Festival": 40,
    "description": "Israeli dancers performing at the 1960 Florida Folk Festival - White Springs, Florida",
    "year": 1960
  },
  {
    "id": 109569,
    "file": "FA3649A",
    "Florida Folk Festival": 37,
    "description": "Willard Olsen making jewelry at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109570,
    "file": "FA3650",
    "Florida Folk Festival": 86,
    "description": "The Junkanoos, Bahamian folk group from Key West, performing limbo dance at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 109571,
    "file": "FA3650A",
    "Florida Folk Festival": 53,
    "description": "Orla and Willard Olsen selling their jewelry at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109573,
    "file": "FA3651A",
    "Florida Folk Festival": 57,
    "description": "Claude Sheppard demonstrating whip braiding at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109574,
    "file": "FA3653",
    "Florida Folk Festival": 52,
    "description": "New Douglas High School couple dancing at the 1957 Florida Folk Festival - White Springs, Florida",
    "year": 1957
  },
  {
    "id": 109575,
    "file": "FA3654",
    "Florida Folk Festival": 26,
    "description": "Singer performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109576,
    "file": "FA3655",
    "Florida Folk Festival": 27,
    "description": "Singers performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109577,
    "file": "FA3656",
    "Florida Folk Festival": 24,
    "description": "Couples dancing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109578,
    "file": "FA3657",
    "Florida Folk Festival": 27,
    "description": "Singers performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109580,
    "file": "FA3658A",
    "Florida Folk Festival": 54,
    "description": "New Douglas High School students dancing at the 1957 Florida Folk Festival - White Springs, Florida",
    "year": 1957
  },
  {
    "id": 109581,
    "file": "FA3659",
    "Florida Folk Festival": 29,
    "description": "Church choir singing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109582,
    "file": "FA3659A",
    "Florida Folk Festival": 30,
    "description": "Children clog dancing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109583,
    "file": "FA3660",
    "Florida Folk Festival": 75,
    "description": "The Minnie J. Niblack Elementary Choir from Lake City singing at the 1957 Florida Folk Festival - White Springs, Florida",
    "year": 1957
  },
  {
    "id": 109585,
    "file": "FA3661",
    "Florida Folk Festival": 22,
    "description": "Girls dancing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109587,
    "file": "FA3662",
    "Florida Folk Festival": 51,
    "description": "New Stanton High School group singing at the 1957 Florida Folk Festival - White Springs, Florida",
    "year": 1957
  },
  {
    "id": 109591,
    "file": "FA3664",
    "Florida Folk Festival": 49,
    "description": "White Springs Choraleers performing at the 1957 Florida Folk Festival - White Springs, Florida",
    "year": "May 5, 1957"
  },
  {
    "id": 109593,
    "file": "FA3665",
    "Florida Folk Festival": 23,
    "description": "Festival goers at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109595,
    "file": "FA3666",
    "Florida Folk Festival": 22,
    "description": "Choir singing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109597,
    "file": "FA3667",
    "Florida Folk Festival": 35,
    "description": "High school chorus singing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109599,
    "file": "FA3668",
    "Florida Folk Festival": 70,
    "description": "New Stanton High School chorus from Jacksonville singing at the 1959 Florida Folk Festival - White Springs, Florida",
    "year": 1959
  },
  {
    "id": 109601,
    "file": "FA3669",
    "Florida Folk Festival": 34,
    "description": "High school group singing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109603,
    "file": "FA3670",
    "Florida Folk Festival": 38,
    "description": "Kerry Waldron performing at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 109606,
    "file": "FA3672",
    "Florida Folk Festival": 35,
    "description": "Mexican dancers performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109608,
    "file": "FA3673",
    "Florida Folk Festival": 35,
    "description": "Mexican dancers performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109610,
    "file": "FA3674",
    "Florida Folk Festival": 49,
    "description": "Children dancing around the maypole at the 1960 Florida Folk Festival - White Springs, Florida",
    "year": 1960
  },
  {
    "id": 109614,
    "file": "FA3676",
    "Florida Folk Festival": 68,
    "description": "Madison Elementary School students winding the maypole at the 1972 Florida Folk Festival - White Springs, Florida",
    "year": 1972
  },
  {
    "id": 109616,
    "file": "FA3677",
    "Florida Folk Festival": 37,
    "description": "Children winding the maypole at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109618,
    "file": "FA3678",
    "Florida Folk Festival": 37,
    "description": "Children winding the maypole at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109620,
    "file": "FA3679",
    "Florida Folk Festival": 37,
    "description": "Children winding the maypole at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109621,
    "file": "FA3680",
    "Florida Folk Festival": 42,
    "description": "Children winding the maypole at the 1959 Florida Folk Festival - White Springs, Florida",
    "year": 1959
  },
  {
    "id": 109626,
    "file": "FA3683",
    "Florida Folk Festival": 76,
    "description": "George Heaps-Nelson family from Swainsboro, Georgia performing at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 109627,
    "file": "FA3683A",
    "Florida Folk Festival": 48,
    "description": "Evelyne Beers Burnstine performing at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109629,
    "file": "FA3684A",
    "Florida Folk Festival": 70,
    "description": "Evelyne Beers Burnstine and Susan Boyer Haley performing at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 109635,
    "file": "FA3690",
    "Florida Folk Festival": 58,
    "description": "Betsy Wiggins Bouwhuizen of Tampa performing at the 1976 Florida Folk Festival - White Springs, Florida",
    "year": 1976
  },
  {
    "id": 109637,
    "file": "FA3692",
    "Florida Folk Festival": 57,
    "description": "Children performing Hawaiian song with bamboo sticks at Florida Folk Festival - White Springs, Florida.",
    "year": "1957 (circa)"
  },
  {
    "id": 109639,
    "file": "FA3695",
    "Florida Folk Festival": 81,
    "description": "Children performing \"Tinikling\", the Philippine bamboo stick dance, at the 1970 Florida Folk Festival - White Springs, Florida",
    "year": 1970
  },
  {
    "id": 109645,
    "file": "FA3702",
    "Florida Folk Festival": 44,
    "description": "Children performing a Hawaiian song at the Florida Folk Festival - White Springs, Florida.",
    "year": "1957 (circa)"
  },
  {
    "id": 109646,
    "file": "FA3703",
    "Florida Folk Festival": 63,
    "description": "Philippine bamboo stick dancers and Korean dancer at the 1957 Florida Folk Festival - White Springs, Florida.",
    "year": 1957
  },
  {
    "id": 109647,
    "file": "FA3704",
    "Florida Folk Festival": 56,
    "description": "Woman singing in the St. Augustine Pageant at the 1953 Florida Folk Festival - White Springs, Florida.",
    "year": 1953
  },
  {
    "id": 109648,
    "file": "FA3705",
    "Florida Folk Festival": 56,
    "description": "Woman singing in the St. Augustine Pageant at the 1953 Florida Folk Festival - White Springs, Florida.",
    "year": 1953
  },
  {
    "id": 109649,
    "file": "FA3706",
    "Florida Folk Festival": 56,
    "description": "Woman singing in the St. Augustine Pageant at the 1953 Florida Folk Festival - White Springs, Florida.",
    "year": 1953
  },
  {
    "id": 109650,
    "file": "FA3707",
    "Florida Folk Festival": 64,
    "description": "Dancer Susan McDonald of the St. Augustine Pageant at the 1953 Florida Folk Festival - White Springs, Florida.",
    "year": 1953
  },
  {
    "id": 109651,
    "file": "FA3708A",
    "Florida Folk Festival": 77,
    "description": "Dancers from St. Augustine performing a Colombian Country dance at the 1953 Florida Folk Festival - White Springs, Florida.",
    "year": 1953
  },
  {
    "id": 109652,
    "file": "FA3709",
    "Florida Folk Festival": 39,
    "description": "Dancer from St. Augustine at the 1953 Florida Folk Festival - White Springs, Florida.",
    "year": 1953
  },
  {
    "id": 109653,
    "file": "FA3710",
    "Florida Folk Festival": 39,
    "description": "Dancer from St. Augustine at the 1953 Florida Folk Festival - White Springs, Florida.",
    "year": 1953
  },
  {
    "id": 109654,
    "file": "FA3711",
    "Florida Folk Festival": 52,
    "description": "Dancer Bette Manucy from St. Augustine at the 1953 Florida Folk Festival - White Springs, Florida.",
    "year": 1953
  },
  {
    "id": 109655,
    "file": "FA3712",
    "Florida Folk Festival": 76,
    "description": "Mr. and Mrs. James A. Ponce of the St. Augustine Spanish Group at the 1953 Florida Folk Festival - White Springs, Florida.",
    "year": 1953
  },
  {
    "id": 109656,
    "file": "FA3713",
    "Florida Folk Festival": 53,
    "description": "Bagpiper Percy Hamilton of Jacksonville at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109657,
    "file": "FA3714",
    "Florida Folk Festival": 72,
    "description": "Scottish pipe band and dancer from Jacksonville performing at the 1972 Florida Folk Festival - White Springs, Florida.",
    "year": 1972
  },
  {
    "id": 109658,
    "file": "FA3715",
    "Florida Folk Festival": 54,
    "description": "Scottish dancers from Jacksonville performing at the Florida Folk Festival - White Springs, Florida",
    "year": "May 6, 1960"
  },
  {
    "id": 109663,
    "file": "FA3720",
    "Florida Folk Festival": 78,
    "description": "Linda Joyce Barcia performing \"Jota Aragonesa\", a Spanish folk dance, at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109665,
    "file": "FA3722",
    "Florida Folk Festival": 56,
    "description": "Charles Newberry playing his spanish guitar during the Florida Folk Festival in White Springs.",
    "year": 1960
  },
  {
    "id": 109666,
    "file": "FA3723",
    "Florida Folk Festival": 30,
    "description": "St. Augustine Pageant at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109670,
    "file": "FA3727",
    "Florida Folk Festival": 65,
    "description": "Cuban American dancers from Jacksonville performing at the 1974 Florida Folk Festival - White Springs, Florida",
    "year": 1974
  },
  {
    "id": 109673,
    "file": "FA3730",
    "Florida Folk Festival": 75,
    "description": "Paris Island Promenaders, from Beaufort, S.C., square dancing at the 1957 Florida Folk Festival - White Springs, Florida",
    "year": 1957
  },
  {
    "id": 109674,
    "file": "FA3731",
    "Florida Folk Festival": 36,
    "description": "Young people square dancing at the Florida Folk Festival - White Springs, Florida",
    "year": "1957 (circa)"
  },
  {
    "id": 109675,
    "file": "FA3732",
    "Florida Folk Festival": 43,
    "description": "The Jolly Swedes of St. Petersburg at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109676,
    "file": "FA3733",
    "Florida Folk Festival": 34,
    "description": "Swedish singer performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109677,
    "file": "FA3734",
    "Florida Folk Festival": 63,
    "description": "Debra, Lynn and Cliff Walden of Gainesville performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1954 (circa)"
  },
  {
    "id": 109678,
    "file": "FA3735",
    "Florida Folk Festival": 34,
    "description": "Regional Food Vendor at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109680,
    "file": "FA3737",
    "Florida Folk Festival": 57,
    "description": "Native American artist Fred Beaver of Ardmore Oklahoma, Florida Folk Festival - White Springs, Florida",
    "year": "1958 (circa)"
  },
  {
    "id": 109681,
    "file": "FA3738",
    "Florida Folk Festival": 57,
    "description": "Native American artist Fred Beaver of Ardmore Oklahoma, Florida Folk Festival - White Springs, Florida",
    "year": "1958 (circa)"
  },
  {
    "id": 109682,
    "file": "FA3739",
    "Florida Folk Festival": 57,
    "description": "Native American artist Fred Beaver of Ardmore Oklahoma, Florida Folk Festival - White Springs, Florida",
    "year": "1958 (circa)"
  },
  {
    "id": 109684,
    "file": "FA3741",
    "Florida Folk Festival": 43,
    "description": "Seminole medicine man Josie Billie at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109685,
    "file": "FA3742",
    "Florida Folk Festival": 52,
    "description": "Seminole medicine man Josie Billie speaking at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109686,
    "file": "FA3743",
    "Florida Folk Festival": 62,
    "description": "Seminole Billy Bowlegs with medicine man Josie Billie at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109689,
    "file": "FA3747",
    "Florida Folk Festival": 47,
    "description": "Seminole Indian Billy Bowlegs III at the 1960 Florida Folk Festival - White Springs, Florida",
    "year": 1960
  },
  {
    "id": 109690,
    "file": "FA3748",
    "Florida Folk Festival": 82,
    "description": "Seminole Indian Billy Bowlegs III (l) and Creek Indian artist Fred Beaver at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109691,
    "file": "FA3749",
    "Florida Folk Festival": 42,
    "description": "Seminole Indian Billy Bowlegs III at the Florida Folk Festival - White Springs, Florida",
    "year": 1960
  },
  {
    "id": 109695,
    "file": "FA3754",
    "Florida Folk Festival": 86,
    "description": "Billy Bowlegs III, front, with Frank and Lottie Shore and their children at the 1958 Florida Folk Festival - White Springs, Florida",
    "year": 1958
  },
  {
    "id": 109697,
    "file": "FA3764",
    "Florida Folk Festival": 44,
    "description": "Lottie Shore holding patchwork at the 1969 Florida Folk Festival - White Springs, Florida",
    "year": 1969
  },
  {
    "id": 109699,
    "file": "FA3766",
    "Florida Folk Festival": 83,
    "description": "Seminole medicine man Frank Shore showing beads to unidentified girls at the 1969 Florida Folk Festival - White Springs, Florida",
    "year": 1969
  },
  {
    "id": 109701,
    "file": "FA3768",
    "Florida Folk Festival": 30,
    "description": "Unidentified boy at the 1969 Florida Folk Festival - White Springs, Florida",
    "year": 1969
  },
  {
    "id": 109704,
    "file": "FA3772",
    "Florida Folk Festival": 82,
    "description": "Jim Strickland (r) and Bill Dudley of Lutz playing at music workshop at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109705,
    "file": "FA3773",
    "Florida Folk Festival": 31,
    "description": "Dulcimer workshop at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 109706,
    "file": "FA3774",
    "Florida Folk Festival": 69,
    "description": "Bucksnort Barndance Orchestra of Gainesville performing at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109707,
    "file": "FA3775",
    "Florida Folk Festival": 51,
    "description": "The Daves Brothers Band of West Palm Beach at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109708,
    "file": "FA3776",
    "Florida Folk Festival": 41,
    "description": "Folk musician Esther Finney at the 1963 Florida Folk Festival - White Springs, Florida",
    "year": 1963
  },
  {
    "id": 109709,
    "file": "FA3777",
    "Florida Folk Festival": 29,
    "description": "Trio performing at the 1968 Florida Folk Festival - White Springs, Florida",
    "year": 1968
  },
  {
    "id": 109710,
    "file": "FA3778",
    "Florida Folk Festival": 29,
    "description": "Trio performing at the 1968 Florida Folk Festival - White Springs, Florida",
    "year": 1968
  },
  {
    "id": 109712,
    "file": "FA3780",
    "Florida Folk Festival": 51,
    "description": "The Foggy Mountain Singers performing at the 1968 Florida Folk Festival - White Springs, Florida.",
    "year": 1968
  },
  {
    "id": 109713,
    "file": "FA3781",
    "Florida Folk Festival": 51,
    "description": "The Foggy Mountain Singers performing at the 1968 Florida Folk Festival - White Springs, Florida.",
    "year": 1968
  },
  {
    "id": 109714,
    "file": "FA3782",
    "Florida Folk Festival": 33,
    "description": "Singing group performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109715,
    "file": "FA3783",
    "Florida Folk Festival": 29,
    "description": "The Pine Valley Boys at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109716,
    "file": "FA3784",
    "Florida Folk Festival": 29,
    "description": "The Pine Valley Boys at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109717,
    "file": "FA3785",
    "Florida Folk Festival": 63,
    "description": "34th Street Laundromat String Band of Gainesville at the 1974 Florida Folk Festival - White Springs, Florida",
    "year": 1974
  },
  {
    "id": 109720,
    "file": "FA3788",
    "Florida Folk Festival": 40,
    "description": "Eric Muller of Gainesville at the 1974 Florida Folk Festival - White Springs, Florida",
    "year": 1974
  },
  {
    "id": 109722,
    "file": "FA3790",
    "Florida Folk Festival": 32,
    "description": "Girls playing jump rope at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109723,
    "file": "FA3791",
    "Florida Folk Festival": 71,
    "description": "Sixth graders of Jacksonville's Forest Hills School performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109724,
    "file": "FA3792",
    "Florida Folk Festival": 43,
    "description": "Teenage girls playing Cat's cradle at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109725,
    "file": "FA3793",
    "Florida Folk Festival": 79,
    "description": "Coolidge Elementary School Dancers, from Coolidge, Georgia, performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109726,
    "file": "FA3794",
    "Florida Folk Festival": 79,
    "description": "Coolidge Elementary School Dancers, from Coolidge, Georgia, performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109727,
    "file": "FA3795",
    "Florida Folk Festival": 32,
    "description": "Girls playing jump rope at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109729,
    "file": "FA3797",
    "Florida Folk Festival": 66,
    "description": "Trick roper Danny Coflin of Odessa and Thelma Boltin at the 1970 Florida Folk Festival - White Springs, Florida",
    "year": 1970
  },
  {
    "id": 109730,
    "file": "FA3798",
    "Florida Folk Festival": 59,
    "description": "Trick roper Danny Coflin of Odessa performing at the 1970 Florida Folk Festival - White Springs, Florida",
    "year": 1970
  },
  {
    "id": 109732,
    "file": "FA3800",
    "Florida Folk Festival": 59,
    "description": "Trick roper Danny Coflin of Odessa performing at the 1970 Florida Folk Festival - White Springs, Florida",
    "year": 1970
  },
  {
    "id": 109734,
    "file": "FA3802",
    "Florida Folk Festival": 44,
    "description": "Danny Coflin of Odessa singing at the 1970 Florida Folk Festival - White Springs, Florida",
    "year": 1970
  },
  {
    "id": 109736,
    "file": "FA3804",
    "Florida Folk Festival": 59,
    "description": "Trick roper Danny Coflin of Odessa performing at the 1970 Florida Folk Festival - White Springs, Florida",
    "year": 1970
  },
  {
    "id": 109738,
    "file": "FA3806",
    "Florida Folk Festival": 14,
    "description": "Crowd at the Florida Folk Festival - White Springs, Florida",
    "year": "1957 (circa)"
  },
  {
    "id": 109739,
    "file": "FA3807",
    "Florida Folk Festival": 22,
    "description": "Audience at the 1969 Florida Folk Festival - White Springs, Florida",
    "year": 1969
  },
  {
    "id": 109740,
    "file": "FA3808",
    "Florida Folk Festival": 22,
    "description": "Audience at the 1969 Florida Folk Festival - White Springs, Florida",
    "year": "1957 (circa)"
  },
  {
    "id": 109741,
    "file": "FA3809",
    "Florida Folk Festival": 22,
    "description": "Audience at the 1962 Florida Folk Festival - White Springs, Florida",
    "year": 1962
  },
  {
    "id": 109745,
    "file": "FA3813",
    "Florida Folk Festival": 79,
    "description": "Bird and animal sounds imitator Tommy Dobbs of Palatka performing at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109746,
    "file": "FA3814",
    "Florida Folk Festival": 39,
    "description": "Raising the American flag at the 1962 Florida Folk Festival - White Springs, Florida",
    "year": 1962
  },
  {
    "id": 109750,
    "file": "FA3818",
    "Florida Folk Festival": 29,
    "description": "The old wooden stage at the Florida Folk Festival - White Springs, Florida",
    "year": 1955
  },
  {
    "id": 109751,
    "file": "FA3819",
    "Florida Folk Festival": 33,
    "description": "Musical group performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109752,
    "file": "FA3820",
    "Florida Folk Festival": 54,
    "description": "The Suwannee 4some of Alachua performing at the 1954 Florida Folk Festival - White Springs, Florida",
    "year": 1954
  },
  {
    "id": 109753,
    "file": "FA3821",
    "Florida Folk Festival": 63,
    "description": "Mrs. Newton D. Wainwright of Hollywood performing at the 1954 Florida Folk Festival - White Springs, Florida",
    "year": 1954
  },
  {
    "id": 109754,
    "file": "FA3822",
    "Florida Folk Festival": 75,
    "description": "Florida State University professor J. Russell Reaver speaking at the 1954 Florida Folk Festival - White Springs, Florida",
    "year": 1954
  },
  {
    "id": 109755,
    "file": "FA3823",
    "Florida Folk Festival": 74,
    "description": "Jubilee Folk Singers of St. Petersburg playing in a workshop at the 1980 Florida Folk Festival - White Springs, Florida",
    "year": 1980
  },
  {
    "id": 109756,
    "file": "FA3824",
    "Florida Folk Festival": 59,
    "description": "Greek dancers and singers from Tarpon Springs at the 1980 Florida Folk Festival - White Springs, Florida",
    "year": 1980
  },
  {
    "id": 109759,
    "file": "FA3829",
    "Florida Folk Festival": 25,
    "description": "Jam session at the 1975 Florida Folk Festival - White Springs, Florida",
    "year": 1975
  },
  {
    "id": 109760,
    "file": "FA3830",
    "Florida Folk Festival": 77,
    "description": "Banjoist and bones player Abner Jay performs with unidentified child at the Florida Folk Festival - White Springs, Florida",
    "year": "1977 (circa)"
  },
  {
    "id": 109762,
    "file": "FA3832",
    "Florida Folk Festival": 77,
    "description": "Banjoist and bones player Abner Jay performs with unidentified child at the Florida Folk Festival - White Springs, Florida",
    "year": "1977 (circa)"
  },
  {
    "id": 109763,
    "file": "FA3833",
    "Florida Folk Festival": 58,
    "description": "Banjoist and bones player Abner Jay performs at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 109766,
    "file": "FA3836",
    "Florida Folk Festival": 59,
    "description": "Tony and Chris \"The Wonder Monkey\" performing at the 1967 Florida Folk Festival - White Springs, Florida",
    "year": 1967
  },
  {
    "id": 109768,
    "file": "FA3838",
    "Florida Folk Festival": 43,
    "description": "Lonnie Morgan, water witcher, at the 1958 Florida Folk Festival - White Springs, Florida",
    "year": 1958
  },
  {
    "id": 109769,
    "file": "FA3839",
    "Florida Folk Festival": 43,
    "description": "Lonnie Morgan, water witcher, at the 1956 Florida Folk Festival - White Springs, Florida",
    "year": 1956
  },
  {
    "id": 109771,
    "file": "FA3841",
    "Florida Folk Festival": 30,
    "description": "Jack Parker whistling at the Florida Folk Festival - White Springs, Florida",
    "year": 1965
  },
  {
    "id": 109772,
    "file": "FA3842",
    "Florida Folk Festival": 29,
    "description": "Whistler Jack Parker at the Florida Folk Festival - White Springs, Florida",
    "year": 1965
  },
  {
    "id": 109773,
    "file": "FA3843",
    "Florida Folk Festival": 38,
    "description": "Children watching puppet show at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109774,
    "file": "FA3844",
    "Florida Folk Festival": 39,
    "description": "Aubrey Dunscombe playing a saw at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109775,
    "file": "FA3848",
    "Florida Folk Festival": 74,
    "description": "Performance by the Shoestring Puppet Theater of Jacksonville at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109776,
    "file": "FA3849",
    "Florida Folk Festival": 74,
    "description": "Performance by the Shoestring Puppet Theater of Jacksonville at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109777,
    "file": "FA3850",
    "Florida Folk Festival": 74,
    "description": "Performance by the Shoestring Puppet Theater of Jacksonville at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109778,
    "file": "FA3851",
    "Florida Folk Festival": 74,
    "description": "Performance by the Shoestring Puppet Theater of Jacksonville at the 1973 Florida Folk Festival - White Springs, Florida",
    "year": 1973
  },
  {
    "id": 109779,
    "file": "FA3852",
    "Florida Folk Festival": 74,
    "description": "Performance by the Shoestring Puppet Theater of Jacksonville at the 1980 Florida Folk Festival - White Springs, Florida",
    "year": 1980
  },
  {
    "id": 109780,
    "file": "FA3853",
    "Florida Folk Festival": 60,
    "description": "Jay Starker of Sarasota playing the steel drum at the 1970 Florida Folk Festival - White Springs, Florida",
    "year": 1970
  },
  {
    "id": 109782,
    "file": "FA3856",
    "Florida Folk Festival": 76,
    "description": "Zeke Stephens of Panama City playing his homemade gourd fiddle at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109783,
    "file": "FA3857",
    "Florida Folk Festival": 61,
    "description": "Zeke Stephens of Panama City playing his fiddle at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109784,
    "file": "FA3858",
    "Florida Folk Festival": 79,
    "description": "Russian balalaika musician Michael Tarakus of Gulfport performing at the 1980 Florida Folk Festival - White Springs, Florida",
    "year": 1980
  },
  {
    "id": 109785,
    "file": "FA3860",
    "Florida Folk Festival": 51,
    "description": "Secretary of State Tom Adams speaking at the 1967 Florida Folk Festival - White Springs, Florida",
    "year": 1967
  },
  {
    "id": 109790,
    "file": "FA3865",
    "Florida Folk Festival": 67,
    "description": "Thelma Boltin and Secretary of State George Firestone at the 1980 Florida Folk Festival - White Springs, Florida",
    "year": 1980
  },
  {
    "id": 109794,
    "file": "FA3870",
    "Florida Folk Festival": 46,
    "description": "Mrs. Charles Kells playing piano at the 1957 Florida Folk Festival - White Springs, Florida",
    "year": 1957
  },
  {
    "id": 109796,
    "file": "FA3872",
    "Florida Folk Festival": 86,
    "description": "Dr. Edwin Kirkland with students Marjorie Hendricks and Douglas Duerlloo at the 1961 Florida Folk Festival - White Springs, Florida",
    "year": 1961
  },
  {
    "id": 109797,
    "file": "FA3873",
    "Florida Folk Festival": 86,
    "description": "Dr. Edwin Kirkland with students Marjorie Hendricks and Douglas Duerlloo at the 1961 Florida Folk Festival - White Springs, Florida",
    "year": 1961
  },
  {
    "id": 109803,
    "file": "FA3880",
    "Florida Folk Festival": 63,
    "description": "Charlie Meadows, Mayor of White Springs, speaking at the 1972 Florida Folk Festival - White Springs, Florida",
    "year": 1972
  },
  {
    "id": 109809,
    "file": "FA3886",
    "Florida Folk Festival": 34,
    "description": "Gospel singers performing at the Florida Folk Festival- White Springs, Florida.",
    "year": "1975 (circa)"
  },
  {
    "id": 109810,
    "file": "FA3887",
    "Florida Folk Festival": 34,
    "description": "Gospel singers performing at the Florida Folk Festival- White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109812,
    "file": "FA3889",
    "Florida Folk Festival": 62,
    "description": "Banjoists performing Stephen Foster's \"Ring de Banjo\" at the Florida Folk Festival- White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109813,
    "file": "FA3890",
    "Florida Folk Festival": 62,
    "description": "Banjoists performing Stephen Foster's \"Ring de Banjo\" at the Florida Folk Festival- White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109814,
    "file": "FA3891",
    "Florida Folk Festival": 50,
    "description": "F. W. \"Shorty\" Bedenbaugh performing at the 1960 Florida Folk Festival- White Springs, Florida",
    "year": 1960
  },
  {
    "id": 109815,
    "file": "FA3892",
    "Florida Folk Festival": 41,
    "description": "The Beers family performing at the 1965 Florida Folk Festival- White Springs, Florida.",
    "year": 1965
  },
  {
    "id": 109816,
    "file": "FA3893",
    "Florida Folk Festival": 53,
    "description": "The Boyer family of Missouri performing at the 1975 Florida Folk Festival- White Springs, Florida.",
    "year": 1975
  },
  {
    "id": 109817,
    "file": "FA3894",
    "Florida Folk Festival": 36,
    "description": "The Beers family performing at the Florida Folk Festival- White Springs, Florida.",
    "year": "1962 (circa)"
  },
  {
    "id": 109818,
    "file": "FA3895",
    "Florida Folk Festival": 36,
    "description": "The Beers family performing at the Florida Folk Festival- White Springs, Florida.",
    "year": "1962 (circa)"
  },
  {
    "id": 109819,
    "file": "FA3896",
    "Florida Folk Festival": 36,
    "description": "The Beers family performing at the Florida Folk Festival- White Springs, Florida.",
    "year": "1962 (circa)"
  },
  {
    "id": 109820,
    "file": "FA3897",
    "Florida Folk Festival": 36,
    "description": "The Beers family performing at the Florida Folk Festival- White Springs, Florida.",
    "year": "1962 (circa)"
  },
  {
    "id": 109821,
    "file": "FA3898",
    "Florida Folk Festival": 37,
    "description": "Evelyne Beers-Burnstine at the 1977 Florida Folk Festival- White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109822,
    "file": "FA3899",
    "Florida Folk Festival": 36,
    "description": "The Beers family performing at the Florida Folk Festival- White Springs, Florida.",
    "year": "1962 (circa)"
  },
  {
    "id": 109826,
    "file": "FA3903",
    "Florida Folk Festival": 61,
    "description": "Evelyne Beers-Burnstine of Petersburg, New York at the 1967 Florida Folk Festival- White Springs, Florida",
    "year": 1967
  },
  {
    "id": 109827,
    "file": "FA3904",
    "Florida Folk Festival": 63,
    "description": "James E. Billie, left, and Will McLean performing at the 1986 Florida Folk Festival- White Springs, Florida.",
    "year": 1986
  },
  {
    "id": 109828,
    "file": "FA3905",
    "Florida Folk Festival": 45,
    "description": "Mary Bonk of Atlanta performing at the 1972 Florida Folk Festival- White Springs, Florida",
    "year": 1972
  },
  {
    "id": 109829,
    "file": "FA3908",
    "Florida Folk Festival": 59,
    "description": "Folk singer Jerry Lawrence Bullard performing at the 1977 Florida Folk Festival- White Springs, Florida",
    "year": 1977
  },
  {
    "id": 109830,
    "file": "FA3909",
    "Florida Folk Festival": 37,
    "description": "Paul Cadwell performing at the 1975 Florida Folk Festival- White Springs, Florida.",
    "year": 1975
  },
  {
    "id": 109832,
    "file": "FA3912",
    "Florida Folk Festival": 48,
    "description": "Folk singer Sara Carter performing at the 1974 Florida Folk Festival - White Springs, Florida",
    "year": 1974
  },
  {
    "id": 109833,
    "file": "FA3913",
    "Florida Folk Festival": 45,
    "description": "Singer Suzette Cason performing at the 1962 Florida Folk Festival - White Springs, Florida",
    "year": 1962
  },
  {
    "id": 109834,
    "file": "FA3914",
    "Florida Folk Festival": 53,
    "description": "Pete Childs of Boston, Mass. performing at the 1963 Florida Folk Festival - White Springs, Florida",
    "year": 1963
  },
  {
    "id": 109845,
    "file": "FA3925",
    "Florida Folk Festival": 77,
    "description": "Folk singer Michael Cooney of Lime Rock, Connecticut performing at the 1972 Florida Folk Festival - White Springs, Florida",
    "year": 1972
  },
  {
    "id": 109846,
    "file": "FA3926",
    "Florida Folk Festival": 77,
    "description": "Folk singer Michael Cooney of Lime Rock, Connecticut performing at the 1972 Florida Folk Festival - White Springs, Florida",
    "year": 1972
  },
  {
    "id": 109848,
    "file": "FA3928",
    "Florida Folk Festival": 45,
    "description": "Singer Steve Cormier performing at the 1974 Florida Folk Festival - White Springs, Florida",
    "year": 1974
  },
  {
    "id": 109849,
    "file": "FA3929",
    "Florida Folk Festival": 52,
    "description": "Singer-guitarist Jo Ann Cox performing at the 1976 Florida Folk Festival - White Springs, Florida.",
    "year": 1976
  },
  {
    "id": 109850,
    "file": "FA3930",
    "Florida Folk Festival": 41,
    "description": "Florida Wildlife Boys performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1960 (circa)"
  },
  {
    "id": 109853,
    "file": "FA3933",
    "Florida Folk Festival": 36,
    "description": "Dale Crider performing at the 1972 Florida Folk Festival - White Springs, Florida",
    "year": 1972
  },
  {
    "id": 109854,
    "file": "FA3934",
    "Florida Folk Festival": 36,
    "description": "Dale Crider performing at the 1972 Florida Folk Festival - White Springs, Florida",
    "year": 1972
  },
  {
    "id": 109855,
    "file": "FA3935",
    "Florida Folk Festival": 68,
    "description": "Scottish bagpiper Robert N. King of Sanford performing at the 1974 Florida Folk Festival - White Springs, Florida",
    "year": 1974
  },
  {
    "id": 109857,
    "file": "FA3937",
    "Florida Folk Festival": 43,
    "description": "Ukrainian dancers and singers at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 109861,
    "file": "FA3941",
    "Florida Folk Festival": 58,
    "description": "Folk singer Robert Dixon of Miami performing at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109862,
    "file": "FA3942",
    "Florida Folk Festival": 56,
    "description": "Vietnamese folk singer Pham Duy performing at the 1966 Florida Folk Festival - White Springs, Florida",
    "year": "May 6, 1966"
  },
  {
    "id": 109863,
    "file": "FA3943",
    "Florida Folk Festival": 69,
    "description": "Calliope musician Dr. R. V. Edwards of Miami performing at the 1971 Florida Folk Festival - White Springs, Florida",
    "year": 1971
  },
  {
    "id": 109864,
    "file": "FA3944",
    "Florida Folk Festival": 58,
    "description": "Eugenia Fitchen of Merritt Island performing at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109867,
    "file": "FA3947",
    "Florida Folk Festival": 58,
    "description": "Eugenia Fitchen of Merritt Island performing at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109868,
    "file": "FA3948",
    "Florida Folk Festival": 56,
    "description": "Doc Flemming, left, and friends performing at the 1974 Florida Folk Festival - White Springs, Florida",
    "year": 1974
  },
  {
    "id": 109869,
    "file": "FA3949",
    "Florida Folk Festival": 56,
    "description": "Doc Flemming, left, and friends performing at the 1974 Florida Folk Festival - White Springs, Florida",
    "year": 1974
  },
  {
    "id": 109871,
    "file": "FA3951",
    "Florida Folk Festival": 32,
    "description": "Doc Flemming performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1970 (circa)"
  },
  {
    "id": 109873,
    "file": "FA3954",
    "Florida Folk Festival": 83,
    "description": "Bob Gerard of Lake City and Kathy Kloiber of W. Palm Beach performing at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109874,
    "file": "FA3955",
    "Florida Folk Festival": 59,
    "description": "Kathy Goodman, left, and Amy Allen performing at the 1974 Florida Folk Festival - White Springs, Florida.",
    "year": 1974
  },
  {
    "id": 109875,
    "file": "FA3956",
    "Florida Folk Festival": 58,
    "description": "Dr. Ben W. Griffith of Macon, Ga. performing at the 1961 Florida Folk Festival - White Springs, Florida",
    "year": 1961
  },
  {
    "id": 109876,
    "file": "FA3957",
    "Florida Folk Festival": 64,
    "description": "Don Grooms, Tim DeMass, and Will McLean performing at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109877,
    "file": "FA3958",
    "Florida Folk Festival": 58,
    "description": "Don Grooms, right, and Tim DeMass performing at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109878,
    "file": "FA3959",
    "Florida Folk Festival": 39,
    "description": "Eliott Hancock performing at the 1975 Florida Folk Festival - White Springs, Florida.",
    "year": 1975
  },
  {
    "id": 109879,
    "file": "FA3960",
    "Florida Folk Festival": 36,
    "description": "The Boyer family performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109880,
    "file": "FA3961",
    "Florida Folk Festival": 47,
    "description": "Susan Boyer Haley playing the psaltery at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109881,
    "file": "FA3962",
    "Florida Folk Festival": 41,
    "description": "The Boyer family performing at the 1975 Florida Folk Festival - White Springs, Florida.",
    "year": 1975
  },
  {
    "id": 109882,
    "file": "FA3963",
    "Florida Folk Festival": 41,
    "description": "The Boyer family performing at the 1975 Florida Folk Festival - White Springs, Florida.",
    "year": 1975
  },
  {
    "id": 109883,
    "file": "FA3964",
    "Florida Folk Festival": 37,
    "description": "Susan Boyer Haley performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109884,
    "file": "FA3965",
    "Florida Folk Festival": 52,
    "description": "Penny Hecht of Jacksonville performing at the 1961 Florida Folk Festival - White Springs, Florida",
    "year": 1961
  },
  {
    "id": 109885,
    "file": "FA3966",
    "Florida Folk Festival": 47,
    "description": "Nick and Carol Hollman performing at the 1976 Florida Folk Festival - White Springs, Florida.",
    "year": 1976
  },
  {
    "id": 109886,
    "file": "FA3967",
    "Florida Folk Festival": 56,
    "description": "Imperial Polk-Ats from Lakeland performing at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109887,
    "file": "FA3968",
    "Florida Folk Festival": 38,
    "description": "Indonesian singers performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1900 (circa)"
  },
  {
    "id": 109888,
    "file": "FA3969",
    "Florida Folk Festival": 66,
    "description": "Skip Johns and the Travelers of Lake City performing at the 1979 Florida Folk Festival - White Springs, Florida",
    "year": 1979
  },
  {
    "id": 109890,
    "file": "FA3971",
    "Florida Folk Festival": 63,
    "description": "The Caney Forkers of Cookeville, Tenn. performing at the 1974 Florida Folk Festival - White Springs, Florida.",
    "year": 1974
  },
  {
    "id": 109891,
    "file": "FA3972",
    "Florida Folk Festival": 63,
    "description": "The Caney Forkers of Cookeville, Tenn. performing at the 1976 Florida Folk Festival - White Springs, Florida.",
    "year": 1976
  },
  {
    "id": 109892,
    "file": "FA3973",
    "Florida Folk Festival": 63,
    "description": "The Caney Forkers of Cookeville, Tenn. performing at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109893,
    "file": "FA3974",
    "Florida Folk Festival": 73,
    "description": "Joe Koehn, left, and Paul Battle, both of Tampa, performing at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109894,
    "file": "FA3975",
    "Florida Folk Festival": 50,
    "description": "Marvin Lacy of Lake Wales performing at the 1957 Florida Folk Festival - White Springs, Florida",
    "year": 1957
  },
  {
    "id": 109895,
    "file": "FA3976",
    "Florida Folk Festival": 50,
    "description": "Marvin Lacy of Lake Wales performing at the 1957 Florida Folk Festival - White Springs, Florida",
    "year": 1957
  },
  {
    "id": 109896,
    "file": "FA3977",
    "Florida Folk Festival": 39,
    "description": "Marvin Lacy of Lake Wales at the 1957 Florida Folk Festival - White Springs, Florida",
    "year": 1957
  },
  {
    "id": 109897,
    "file": "FA3978",
    "Florida Folk Festival": 51,
    "description": "Lance Lazonby of Hawthorne performing at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109898,
    "file": "FA3979",
    "Florida Folk Festival": 54,
    "description": "Toymaker Jack Bryant of Knoxville, Tenn. at the 1972 Florida Folk Festival - White Springs, Florida",
    "year": 1972
  },
  {
    "id": 109899,
    "file": "FA3980",
    "Florida Folk Festival": 52,
    "description": "The Singing Le Fevre Family performing at the 1971 Florida Folk Festival - White Springs, Florida",
    "year": 1971
  },
  {
    "id": 109900,
    "file": "FA3981",
    "Florida Folk Festival": 54,
    "description": "Toymaker Jack Bryant of Knoxville, Tenn. at the 1971 Florida Folk Festival - White Springs, Florida.",
    "year": 1971
  },
  {
    "id": 109901,
    "file": "FA3982",
    "Florida Folk Festival": 80,
    "description": "Church choir director Alphonso Levy of Lake City leading the choir at the 1968 Florida Folk Festival - White Springs, Florida",
    "year": 1968
  },
  {
    "id": 109902,
    "file": "FA3983",
    "Florida Folk Festival": 80,
    "description": "Church choir director Alphonso Levy of Lake City leading the choir at the 1968 Florida Folk Festival - White Springs, Florida",
    "year": 1968
  },
  {
    "id": 109904,
    "file": "FA3985",
    "Florida Folk Festival": 82,
    "description": "Church choir director Alphonso Levy of Lake City leading children's choir at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109905,
    "file": "FA3986",
    "Florida Folk Festival": 79,
    "description": "Church choir director Alphonso Levy of Lake City with children's choir at the Florida Folk Festival - White Springs, Florida",
    "year": "1960 (circa)"
  },
  {
    "id": 109906,
    "file": "FA3987",
    "Florida Folk Festival": 47,
    "description": "Jim Luce of Titusville performing at the 1963 Florida Folk Festival - White Springs, Florida",
    "year": 1963
  },
  {
    "id": 109907,
    "file": "FA3988",
    "Florida Folk Festival": 59,
    "description": "Lydia and the Pinkhams of Lakeland performing at the 1974 Florida Folk Festival - White Springs, Florida",
    "year": 1974
  },
  {
    "id": 109908,
    "file": "FA3989",
    "Florida Folk Festival": 59,
    "description": "Lydia and the Pinkhams of Lakeland performing at the 1974 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 109909,
    "file": "FA3990",
    "Florida Folk Festival": 56,
    "description": "The Makley Family of Jacksonville yodeling at the 1978 Florida Folk Festival - White Springs, Florida",
    "year": 1978
  },
  {
    "id": 109910,
    "file": "FA3991",
    "Florida Folk Festival": 33,
    "description": "Sonia Malkine performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1970 (circa)"
  },
  {
    "id": 109912,
    "file": "FA3993",
    "Florida Folk Festival": 33,
    "description": "Sonia Malkine performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1970 (circa)"
  },
  {
    "id": 109913,
    "file": "FA3994",
    "Florida Folk Festival": 50,
    "description": "Joe Mark of St. Augustine performing at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109914,
    "file": "FA3995",
    "Florida Folk Festival": 83,
    "description": "Joe Mark of St. Augustine, right, performing with Gene and Gail Smith at the 1977 Florida Folk Festival - White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 109915,
    "file": "FA3996",
    "Florida Folk Festival": 40,
    "description": "John McCutcheon performing at the 1976 Florida Folk Festival - White Springs, Florida.",
    "year": 1976
  },
  {
    "id": 109916,
    "file": "FA3997",
    "Florida Folk Festival": 40,
    "description": "John McCutcheon performing at the 1976 Florida Folk Festival - White Springs, Florida.",
    "year": 1976
  },
  {
    "id": 109917,
    "file": "FA3998",
    "Florida Folk Festival": 42,
    "description": "Leroy McDaniel, right, performing at the Florida Folk Festival - White Springs, Florida",
    "year": "1950 (circa)"
  },
  {
    "id": 109920,
    "file": "FA4001",
    "Florida Folk Festival": 35,
    "description": "Will McLean of Tallahassee at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109921,
    "file": "FA4002",
    "Florida Folk Festival": 47,
    "description": "Sheila Flemming Miller performing at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 109922,
    "file": "FA4003",
    "Florida Folk Festival": 36,
    "description": "Sheila Flemming Miller at the 1976 Florida Folk Festival - White Springs, Florida",
    "year": 1976
  },
  {
    "id": 109926,
    "file": "FA4007",
    "Florida Folk Festival": 47,
    "description": "Ann and Howie Mitchell performing at the 1975 Florida Folk Festival - White Springs, Florida.",
    "year": 1975
  },
  {
    "id": 109928,
    "file": "FA4009",
    "Florida Folk Festival": 47,
    "description": "Colonel and Mrs. Jacob Moon performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109929,
    "file": "FA4011",
    "Florida Folk Festival": 25,
    "description": "J. C. Moore at the 1959 Florida Folk Festival - White Springs, Florida",
    "year": 1959
  },
  {
    "id": 109930,
    "file": "FA4012",
    "Florida Folk Festival": 44,
    "description": "Minstrel Mark Moore performing at the 1961 Florida Folk Festival - White Springs, Florida",
    "year": 1961
  },
  {
    "id": 109931,
    "file": "FA4013",
    "Florida Folk Festival": 38,
    "description": "Michael Moore performing at the 1976 Florida Folk Festival - White Springs, Florida.",
    "year": 1976
  },
  {
    "id": 109936,
    "file": "FA4018",
    "Florida Folk Festival": 52,
    "description": "Barbara Muller of Lake Mary performing at the 1976 Florida Folk Festival - White Springs, Florida.",
    "year": 1976
  },
  {
    "id": 109937,
    "file": "FA4019",
    "Florida Folk Festival": 52,
    "description": "Barbara Muller of Lake Mary performing at the 1976 Florida Folk Festival - White Springs, Florida.",
    "year": 1976
  },
  {
    "id": 109938,
    "file": "FA4020",
    "Florida Folk Festival": 52,
    "description": "Barbara Muller of Lake Mary performing at the 1973 Florida Folk Festival - White Springs, Florida",
    "year": 1973
  },
  {
    "id": 109939,
    "file": "FA4021",
    "Florida Folk Festival": 67,
    "description": "Barbara Muller of Lake Mary and Dan Tillinghast performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109940,
    "file": "FA4022",
    "Florida Folk Festival": 65,
    "description": "Tony Myers and Mary Ann Dinella of Tampa performing at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 109941,
    "file": "FA4023",
    "Florida Folk Festival": 49,
    "description": "Ruth Neal of Gainesville performing at the 1962 Florida Folk Festival - White Springs, Florida",
    "year": 1962
  },
  {
    "id": 109942,
    "file": "FA4024",
    "Florida Folk Festival": 49,
    "description": "Ruth Neal of Gainesville performing at the 1961 Florida Folk Festival - White Springs, Florida",
    "year": 1961
  },
  {
    "id": 109943,
    "file": "FA4025",
    "Florida Folk Festival": 69,
    "description": "L-r, George, Marilyn, and Jimmy Heaps-Nelson performing at the 1974 Florida Folk Festival - White Springs, Florida",
    "year": 1974
  },
  {
    "id": 109945,
    "file": "FA4027",
    "Florida Folk Festival": 56,
    "description": "Rick Norcross, left, and friend performing at the 1974 Florida Folk Festival - White Springs, Florida",
    "year": 1974
  },
  {
    "id": 109946,
    "file": "FA4028",
    "Florida Folk Festival": 48,
    "description": "Larry Older of Lake Hamilton performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109947,
    "file": "FA4029",
    "Florida Folk Festival": 59,
    "description": "Larry and Martha Older of Lake Hamilton performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109949,
    "file": "FA4031",
    "Florida Folk Festival": 69,
    "description": "Folk musician Bob Patterson of St. Augustine performing at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 109951,
    "file": "FA4033",
    "Florida Folk Festival": 44,
    "description": "Folk musician Bob Pavitt performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109952,
    "file": "FA4034",
    "Florida Folk Festival": 44,
    "description": "Folk musician Bob Pavitt performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109953,
    "file": "FA4035",
    "Florida Folk Festival": 49,
    "description": "Folk musician Bob Pavitt performing at the 1971 Florida Folk Festival - White Springs, Florida.",
    "year": 1971
  },
  {
    "id": 109955,
    "file": "FA4037",
    "Florida Folk Festival": 54,
    "description": "Polish Singers from Belleview performing at the 1960 Florida Folk Festival - White Springs, Florida",
    "year": 1960
  },
  {
    "id": 109956,
    "file": "FA4038",
    "Florida Folk Festival": 33,
    "description": "Polish dancer performing at the Florida Folk Festival - White Springs, Florida.",
    "year": "1900 (circa)"
  },
  {
    "id": 109960,
    "file": "FA4042",
    "Florida Folk Festival": 38,
    "description": "Seafood Combo performing at the 1974 Florida Folk Festival - White Springs, Florida",
    "year": 1974
  },
  {
    "id": 109961,
    "file": "FA4043",
    "Florida Folk Festival": 38,
    "description": "Seafood Combo performing at the 1975 Florida Folk Festival - White Springs, Florida",
    "year": 1975
  },
  {
    "id": 110161,
    "file": "FA4249",
    "Florida Folk Festival": 35,
    "description": "Philippine food booth at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1991"
  },
  {
    "id": 110269,
    "file": "FA4359",
    "Florida Folk Festival": 68,
    "description": "Basket maker Lucreaty Clark splitting white oak strips at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110270,
    "file": "FA4360",
    "Florida Folk Festival": 68,
    "description": "Basket maker Lucreaty Clark splitting white oak strips at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110274,
    "file": "FA4364",
    "Florida Folk Festival": 41,
    "description": "Basket maker Lucreaty Clark at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110275,
    "file": "FA4365",
    "Florida Folk Festival": 32,
    "description": "Display of baskets at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110276,
    "file": "FA4366",
    "Florida Folk Festival": 34,
    "description": "Musicians performing at the 1984 Florida Folk Festival - White Springs, Florida.",
    "year": 1984
  },
  {
    "id": 110280,
    "file": "FA4374",
    "Florida Folk Festival": 70,
    "description": "Thelma Boltin being presented with a 1985 Folk Heritage Award at the Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110281,
    "file": "FA4375",
    "Florida Folk Festival": 71,
    "description": "Lucreaty Clark being presented with a 1985 Folk Heritage Award at the Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110285,
    "file": "FA4388",
    "Florida Folk Festival": 65,
    "description": "Lee Whyms of the Junkanoos from Key West performing at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110286,
    "file": "FA4389",
    "Florida Folk Festival": 78,
    "description": "Lofton \"Coffee\" Butler and Lee Whyms of the Junkanoos performing at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110287,
    "file": "FA4389A",
    "Florida Folk Festival": 57,
    "description": "Kenneth Rahming of the Junkanoos performing at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110289,
    "file": "FA4391",
    "Florida Folk Festival": 50,
    "description": "The Junkanoos of Key West performing at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110293,
    "file": "FA4395",
    "Florida Folk Festival": 76,
    "description": "Czechoslovakian egg decorating by Edie Michalek of Masaryktown at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110294,
    "file": "FA4396",
    "Florida Folk Festival": 73,
    "description": "Margaret Garrison of Jacksonville making sweetgrass baskets at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110295,
    "file": "FA4397",
    "Florida Folk Festival": 73,
    "description": "Margaret Garrison of Jacksonville making sweetgrass baskets at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110296,
    "file": "FA4398",
    "Florida Folk Festival": 70,
    "description": "Unidentified man splitting wood strips for basket making at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110297,
    "file": "FA4399",
    "Florida Folk Festival": 70,
    "description": "Unidentified man splitting wood strips for basket making at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110298,
    "file": "FA4400",
    "Florida Folk Festival": 41,
    "description": "Basket maker Lucreaty Clark at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110299,
    "file": "FA4401",
    "Florida Folk Festival": 52,
    "description": "Artist Ellis Wright drawing a portrait at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110300,
    "file": "FA4402",
    "Florida Folk Festival": 52,
    "description": "Artist Ellis Wright drawing a portrait at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 110309,
    "file": "FA4416",
    "Florida Folk Festival": 57,
    "description": "Albert \"Buck\" Thompson playing blues guitar at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110310,
    "file": "FA4417",
    "Florida Folk Festival": 57,
    "description": "Albert \"Buck\" Thompson playing blues guitar at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110312,
    "file": "FA4419",
    "Florida Folk Festival": 57,
    "description": "Albert \"Buck\" Thompson playing blues guitar at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110314,
    "file": "FA4421",
    "Florida Folk Festival": 48,
    "description": "Golden Star Arabic Band performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110315,
    "file": "FA4422",
    "Florida Folk Festival": 36,
    "description": "Fahed Iwais performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110323,
    "file": "FA4430",
    "Florida Folk Festival": 58,
    "description": "Troy and Lucy Lovelace of Brandon performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110324,
    "file": "FA4431",
    "Florida Folk Festival": 49,
    "description": "Troy Lovelace of Brandon performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110325,
    "file": "FA4432A",
    "Florida Folk Festival": 46,
    "description": "Performance of Shoeshine Rhythms at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110328,
    "file": "FA4435",
    "Florida Folk Festival": 31,
    "description": "Children on stage at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110329,
    "file": "FA4436",
    "Florida Folk Festival": 45,
    "description": "Boys in Ukrainian dance costume at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110330,
    "file": "FA4438",
    "Florida Folk Festival": 39,
    "description": "Gospel singers performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110331,
    "file": "FA4439",
    "Florida Folk Festival": 39,
    "description": "Gospel singers performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110335,
    "file": "FA4443",
    "Florida Folk Festival": 32,
    "description": "Woodcarver working at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110336,
    "file": "FA4444",
    "Florida Folk Festival": 41,
    "description": "Lilianne Louis serving food at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110338,
    "file": "FA4445",
    "Florida Folk Festival": 38,
    "description": "Musical group performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110339,
    "file": "FA4445A",
    "Florida Folk Festival": 41,
    "description": "Artist with display of work at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110340,
    "file": "FA4446",
    "Florida Folk Festival": 37,
    "description": "Display of beaded items at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110341,
    "file": "FA4447",
    "Florida Folk Festival": 38,
    "description": "Joseph Limone performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": "May 23, 1986"
  },
  {
    "id": 110343,
    "file": "FA4449",
    "Florida Folk Festival": 48,
    "description": "Haitian American dancer performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": "May 23, 1986"
  },
  {
    "id": 110345,
    "file": "FA4451",
    "Florida Folk Festival": 34,
    "description": "Musicians performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110346,
    "file": "FA4452",
    "Florida Folk Festival": 75,
    "description": "Greek bagpiper Nikitas Tsimouris of Tarpon Springs performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110348,
    "file": "FA4453",
    "Florida Folk Festival": 72,
    "description": "Mary McClain, accompanied by Willie James, sings the blues at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110349,
    "file": "FA4454",
    "Florida Folk Festival": 42,
    "description": "Mary McClain sings the blues at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110350,
    "file": "FA4455",
    "Florida Folk Festival": 31,
    "description": "Dancer performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110363,
    "file": "FA4468",
    "Florida Folk Festival": 41,
    "description": "Girls playing clapping game at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110364,
    "file": "FA4469",
    "Florida Folk Festival": 41,
    "description": "Girls playing clapping game at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110366,
    "file": "FA4471",
    "Florida Folk Festival": 48,
    "description": "Woman in front of Seminole chickee at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110367,
    "file": "FA4472",
    "Florida Folk Festival": 49,
    "description": "Seminole chickee under construction at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110370,
    "file": "FA4475",
    "Florida Folk Festival": 43,
    "description": "Floured food ready for frying at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110371,
    "file": "FA4476",
    "Florida Folk Festival": 33,
    "description": "Cook preparing food at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110373,
    "file": "FA4478",
    "Florida Folk Festival": 41,
    "description": "Boy swinging at duck pinata at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110374,
    "file": "FA4479",
    "Florida Folk Festival": 41,
    "description": "Boy swinging at duck pinata at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110376,
    "file": "FA4481",
    "Florida Folk Festival": 43,
    "description": "Child swinging at duck pinata at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110377,
    "file": "FA4482",
    "Florida Folk Festival": 33,
    "description": "Cook preparing food at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110378,
    "file": "FA4483",
    "Florida Folk Festival": 20,
    "description": "Couple at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110382,
    "file": "FA4487",
    "Florida Folk Festival": 29,
    "description": "Men socializing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110384,
    "file": "FA4489",
    "Florida Folk Festival": 40,
    "description": "Eugenia Fitchin performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110387,
    "file": "FA4491",
    "Florida Folk Festival": 40,
    "description": "Eugenia Fitchin performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110388,
    "file": "FA4492",
    "Florida Folk Festival": 58,
    "description": "Dennis Devine and Eugenia Fitchin performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110390,
    "file": "FA4494",
    "Florida Folk Festival": 58,
    "description": "Dennis Devine and Eugenia Fitchin performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110393,
    "file": "FA4497",
    "Florida Folk Festival": 30,
    "description": "Cloggers dancing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110394,
    "file": "FA4498",
    "Florida Folk Festival": 33,
    "description": "Cloggers performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110395,
    "file": "FA4499",
    "Florida Folk Festival": 33,
    "description": "Cloggers performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110396,
    "file": "FA4500",
    "Florida Folk Festival": 33,
    "description": "Cloggers performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110398,
    "file": "FA4502",
    "Florida Folk Festival": 33,
    "description": "Cloggers performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110399,
    "file": "FA4503",
    "Florida Folk Festival": 33,
    "description": "Cloggers performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110400,
    "file": "FA4504",
    "Florida Folk Festival": 35,
    "description": "Don Grooms performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110401,
    "file": "FA4505",
    "Florida Folk Festival": 42,
    "description": "Cross Creek Cloggers dancing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110403,
    "file": "FA4507",
    "Florida Folk Festival": 34,
    "description": "Cross Creek Cloggers at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110405,
    "file": "FA4509",
    "Florida Folk Festival": 42,
    "description": "Cross Creek Cloggers dancing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110406,
    "file": "FA4510",
    "Florida Folk Festival": 36,
    "description": "Bobby Hicks performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110407,
    "file": "FA4511",
    "Florida Folk Festival": 30,
    "description": "Children singing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110409,
    "file": "FA4513",
    "Florida Folk Festival": 62,
    "description": "Don Grooms, James Billie, and friends performing at the 1985 Florida Folk Festival - White Springs, Florida.",
    "year": 1985
  },
  {
    "id": 110411,
    "file": "FA4515",
    "Florida Folk Festival": 64,
    "description": "Gamble Rogers, right, and Paul Champion performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110412,
    "file": "FA4516",
    "Florida Folk Festival": 61,
    "description": "Will McLean, left, and Paul Champion performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110413,
    "file": "FA4517",
    "Florida Folk Festival": 57,
    "description": "Will McLean, center, and friends performing at the 1985 Florida Folk Festival - White Springs, Florida.",
    "year": 1985
  },
  {
    "id": 110414,
    "file": "FA4518",
    "Florida Folk Festival": 29,
    "description": "Couples dancing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 110417,
    "file": "FA4521",
    "Florida Folk Festival": 62,
    "description": "Don Grooms, James Billie, and friends performing at the 1985 Florida Folk Festival - White Springs, Florida.",
    "year": 1985
  },
  {
    "id": 110421,
    "file": "FA4525",
    "Florida Folk Festival": 77,
    "description": "Pam Solano of St. Augustine demonstrating palmetto hat braiding at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110423,
    "file": "FA4527",
    "Florida Folk Festival": 60,
    "description": "Alma Bailey of Live Oak demonstrating quilting at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110424,
    "file": "FA4532",
    "Florida Folk Festival": 86,
    "description": "Evelyn Caffee Parks of Winter Haven showing her palmetto and palm crafts at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110425,
    "file": "FA4533",
    "Florida Folk Festival": 86,
    "description": "Evelyn Caffee Parks of Winter Haven showing her palmetto and palm crafts at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110426,
    "file": "FA4534",
    "Florida Folk Festival": 86,
    "description": "Evelyn Caffee Parks of Winter Haven showing her palmetto and palm crafts at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110431,
    "file": "FA4539",
    "Florida Folk Festival": 72,
    "description": "Anne Lunestad of St. Augustine demonstrating flax spinning at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110432,
    "file": "FA4540",
    "Florida Folk Festival": 52,
    "description": "Potter John Henry Hintermister, right, at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110433,
    "file": "FA4541",
    "Florida Folk Festival": 37,
    "description": "Gourd crafts on display at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110435,
    "file": "FA4543",
    "Florida Folk Festival": 54,
    "description": "Connie Palmer making pine needle baskets at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110436,
    "file": "FA4544",
    "Florida Folk Festival": 81,
    "description": "Connie Palmer, left and Mary Nell Bailey making pine needle baskets at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110437,
    "file": "FA4545",
    "Florida Folk Festival": 59,
    "description": "Pineneedle baskets by Thelma Stant on display at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110438,
    "file": "FA4546",
    "Florida Folk Festival": 79,
    "description": "Tom Thompson of DeFuniak Springs exhibiting his white oak baskets at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110439,
    "file": "FA4547",
    "Florida Folk Festival": 79,
    "description": "Tom Thompson of DeFuniak Springs exhibiting his white oak baskets at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110440,
    "file": "FA4548",
    "Florida Folk Festival": 67,
    "description": "Thelma Stant of Niceville with her pineneedle baskets at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110442,
    "file": "FA4550",
    "Florida Folk Festival": 67,
    "description": "Thelma Stant of Niceville with her pineneedle baskets at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110444,
    "file": "FA4552",
    "Florida Folk Festival": 37,
    "description": "Artists exhibiting work at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110447,
    "file": "FA4555",
    "Florida Folk Festival": 52,
    "description": "El Grupo Canaveral of Miami performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110449,
    "file": "FA4557",
    "Florida Folk Festival": 52,
    "description": "El Grupo Canaveral of Miami performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110450,
    "file": "FA4558",
    "Florida Folk Festival": 52,
    "description": "El Grupo Canaveral of Miami performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110452,
    "file": "FA4560",
    "Florida Folk Festival": 52,
    "description": "El Grupo Canaveral of Miami performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110456,
    "file": "FA4564",
    "Florida Folk Festival": 50,
    "description": "Liliane Louis preparing Haitian food at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110459,
    "file": "FA4566",
    "Florida Folk Festival": 50,
    "description": "Liliane Louis preparing Haitian food at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110460,
    "file": "FA4567",
    "Florida Folk Festival": 57,
    "description": "Liliane Louis demonstrating Haitian cooking at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110462,
    "file": "FA4569",
    "Florida Folk Festival": 50,
    "description": "Glen Simmons building a glades skiff at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110464,
    "file": "FA4571",
    "Florida Folk Festival": 55,
    "description": "Jaime Bronsztein performing klezmer music at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110466,
    "file": "FA4573",
    "Florida Folk Festival": 43,
    "description": "Trio performing klezmer music at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110470,
    "file": "FA4577",
    "Florida Folk Festival": 54,
    "description": "Attaching roof to Seminole chickee frame at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110472,
    "file": "FA4579",
    "Florida Folk Festival": 54,
    "description": "Attaching roof to Seminole chickee frame at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110473,
    "file": "FA4580",
    "Florida Folk Festival": 54,
    "description": "Lifting roof onto Seminole chickee frame at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110474,
    "file": "FA4582",
    "Florida Folk Festival": 48,
    "description": "Checking level of Seminole chickee at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110475,
    "file": "FA4583",
    "Florida Folk Festival": 49,
    "description": "Seminole chickee under construction at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110478,
    "file": "FA4586",
    "Florida Folk Festival": 31,
    "description": "Clogging workshop at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": "May 23, 1986"
  },
  {
    "id": 110482,
    "file": "FA4590",
    "Florida Folk Festival": 53,
    "description": "Jesus Rodriguez playing Venezuelan harp at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110485,
    "file": "FA4593",
    "Florida Folk Festival": 43,
    "description": "Martin Crutchfield performing at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110486,
    "file": "FA4594",
    "Florida Folk Festival": 71,
    "description": "E. A. \"Frog\" Smith telling Florida stories and tall tales at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110487,
    "file": "FA4595",
    "Florida Folk Festival": 71,
    "description": "E. A. \"Frog\" Smith telling Florida stories and tall tales at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110492,
    "file": "FA4601",
    "Florida Folk Festival": 32,
    "description": "Musician Del Suggs at the 1986 Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 110506,
    "file": "FA4615",
    "Florida Folk Festival": 48,
    "description": "Member of the Junkanoos performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": "May 23, 1987"
  },
  {
    "id": 110507,
    "file": "FA4616",
    "Florida Folk Festival": 48,
    "description": "Member of the Junkanoos performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": "May 23, 1987"
  },
  {
    "id": 110508,
    "file": "FA4617",
    "Florida Folk Festival": 38,
    "description": "The Junkanoos performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": "May 23, 1987"
  },
  {
    "id": 110509,
    "file": "FA4618",
    "Florida Folk Festival": 49,
    "description": "Jean Smith demonstrating net making at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": "May 23, 1987"
  },
  {
    "id": 110510,
    "file": "FA4619",
    "Florida Folk Festival": 59,
    "description": "Jean and Bobby Smith demonstrating net making at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": "May 23, 1987"
  },
  {
    "id": 110511,
    "file": "FA4620",
    "Florida Folk Festival": 50,
    "description": "Bobby Smith demonstrating net making at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": "May 23, 1987"
  },
  {
    "id": 110512,
    "file": "FA4621",
    "Florida Folk Festival": 38,
    "description": "The Junkanoos performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": "May 23, 1987"
  },
  {
    "id": 110513,
    "file": "FA4622",
    "Florida Folk Festival": 85,
    "description": "Curly Dekle accepting the Florida Folk Heritage Award from Pat Waterman at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": "May 23, 1987"
  },
  {
    "id": 110514,
    "file": "FA4623",
    "Florida Folk Festival": 43,
    "description": "El Grupo Canaveral performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": "May 23, 1987"
  },
  {
    "id": 110518,
    "file": "FA4627",
    "Florida Folk Festival": 64,
    "description": "Costa Buzier demonstrating shrimp trawl net making at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": "May 22, 1987"
  },
  {
    "id": 110520,
    "file": "FA4629",
    "Florida Folk Festival": 56,
    "description": "Theadus Corbin demonstrating boat building at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": "May 22, 1987"
  },
  {
    "id": 110523,
    "file": "FA4632",
    "Florida Folk Festival": 78,
    "description": "Toymaker Dennis Henry, right, and Luther Rozar playing with toys at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110524,
    "file": "FA4633",
    "Florida Folk Festival": 43,
    "description": "Connie Rizner making rag rugs at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": "May 22, 1987"
  },
  {
    "id": 110526,
    "file": "FA4635",
    "Florida Folk Festival": 43,
    "description": "Connie Rizner making rag rugs at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": "May 22, 1987"
  },
  {
    "id": 110527,
    "file": "FA4636",
    "Florida Folk Festival": 74,
    "description": "Sash weaver Richard Smith of Tallahassee exhibiting his work at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": "May 22, 1987"
  },
  {
    "id": 110529,
    "file": "FA4638",
    "Florida Folk Festival": 53,
    "description": "Karen Nichols demonstrating rope making at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110530,
    "file": "FA4639",
    "Florida Folk Festival": 53,
    "description": "Karen Nichols demonstrating rope making at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110531,
    "file": "FA4640",
    "Florida Folk Festival": 49,
    "description": "Closeup of net making demonstration at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110533,
    "file": "FA4642",
    "Florida Folk Festival": 43,
    "description": "Martin Crutchfield performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110534,
    "file": "FA4643",
    "Florida Folk Festival": 46,
    "description": "Jim Ballew of Orlando performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110536,
    "file": "FA4645",
    "Florida Folk Festival": 46,
    "description": "Jim Ballew of Orlando performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110539,
    "file": "FA4648",
    "Florida Folk Festival": 38,
    "description": "Gamble Rogers performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110541,
    "file": "FA4650",
    "Florida Folk Festival": 38,
    "description": "Gamble Rogers performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110543,
    "file": "FA4652",
    "Florida Folk Festival": 37,
    "description": "L. J. Slavin performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110544,
    "file": "FA4653",
    "Florida Folk Festival": 53,
    "description": "Jesus Rodriguez playing Venezuelan harp at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110549,
    "file": "FA4658",
    "Florida Folk Festival": 84,
    "description": "Spiros Skordilis, center, and apprentices playing Greek bouzouki music at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110550,
    "file": "FA4659",
    "Florida Folk Festival": 84,
    "description": "Spiros Skordilis, center, and apprentices playing Greek bouzouki music at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110552,
    "file": "FA4661",
    "Florida Folk Festival": 60,
    "description": "L. J. Slavin, left, and Bill Dudley performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110553,
    "file": "FA4662",
    "Florida Folk Festival": 60,
    "description": "L. J. Slavin, left, and Bill Dudley performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110555,
    "file": "FA4664",
    "Florida Folk Festival": 62,
    "description": "Gamble Rogers performing on the old marble stage at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110559,
    "file": "FA4668",
    "Florida Folk Festival": 51,
    "description": "New Sand Mountain Wildcats performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110568,
    "file": "FA4677",
    "Florida Folk Festival": 44,
    "description": "Seminole woman grilling turtle at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110571,
    "file": "FA4681",
    "Florida Folk Festival": 72,
    "description": "Woman serving food at the Beulah Baptist Church food booth at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110572,
    "file": "FA4682",
    "Florida Folk Festival": 72,
    "description": "Woman serving food at the Beulah Baptist Church food booth at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110573,
    "file": "FA4683",
    "Florida Folk Festival": 34,
    "description": "Musicians performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110574,
    "file": "FA4684",
    "Florida Folk Festival": 36,
    "description": "Bobby Hicks performing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110578,
    "file": "FA4688",
    "Florida Folk Festival": 35,
    "description": "Gamble Rogers singing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110581,
    "file": "FA4691",
    "Florida Folk Festival": 28,
    "description": "Square dancing at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 110584,
    "file": "FA4694",
    "Florida Folk Festival": 50,
    "description": "Harold Dunn making carved miniatures at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110587,
    "file": "FA4697",
    "Florida Folk Festival": 46,
    "description": "Carved miniatures by Harold Dunn at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110588,
    "file": "FA4698",
    "Florida Folk Festival": 50,
    "description": "Harold Dunn making carved miniatures at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110589,
    "file": "FA4699",
    "Florida Folk Festival": 52,
    "description": "Goose Culbreath and friends performing at the 1988 Florida Folk Festival - White Springs, Florida.",
    "year": 1988
  },
  {
    "id": 110591,
    "file": "FA4701",
    "Florida Folk Festival": 53,
    "description": "Forest Oakes demonstrating broom making at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110592,
    "file": "FA4702",
    "Florida Folk Festival": 53,
    "description": "Forest Oakes demonstrating broom making at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110593,
    "file": "FA4703",
    "Florida Folk Festival": 53,
    "description": "George Altman demonstrating whip making at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110594,
    "file": "FA4704",
    "Florida Folk Festival": 52,
    "description": "Fred Whitlow tests a jews harp he made at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110596,
    "file": "FA4706",
    "Florida Folk Festival": 58,
    "description": "Southwest Florida Steel Drum Band performing at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110598,
    "file": "FA4708",
    "Florida Folk Festival": 79,
    "description": "Isimba Bailey of the Southwest Florida Steel Drum Band performing at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110599,
    "file": "FA4709",
    "Florida Folk Festival": 79,
    "description": "Isimba Bailey of the Southwest Florida Steel Drum Band performing at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110601,
    "file": "FA4711",
    "Florida Folk Festival": 58,
    "description": "Farrier John Flaherty working on a horseshoe at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110602,
    "file": "FA4712",
    "Florida Folk Festival": 58,
    "description": "Farrier John Flaherty working on a horseshoe at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110604,
    "file": "FA4714",
    "Florida Folk Festival": 46,
    "description": "Fred Whitlow making a Jew's harp at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110605,
    "file": "FA4715",
    "Florida Folk Festival": 46,
    "description": "Fred Whitlow making a Jew's harp at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110606,
    "file": "FA4716",
    "Florida Folk Festival": 46,
    "description": "Fiddler Ralph Blizard performing at the 1988 Florida Folk Festival - White Springs, Florida.",
    "year": 1988
  },
  {
    "id": 110607,
    "file": "FA4717",
    "Florida Folk Festival": 45,
    "description": "Fiddler George Smith performing at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110609,
    "file": "FA4719",
    "Florida Folk Festival": 74,
    "description": "Loretta Coblentz and Norma Detweilder demonstrating quilting at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110613,
    "file": "FA4736",
    "Florida Folk Festival": 33,
    "description": "Musician Don Grooms at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110616,
    "file": "FA4739",
    "Florida Folk Festival": 33,
    "description": "Musician Don Grooms at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110622,
    "file": "FA4745",
    "Florida Folk Festival": 52,
    "description": "Rufus Adams demonstrating chair caning at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110623,
    "file": "FA4746",
    "Florida Folk Festival": 52,
    "description": "Rufus Adams demonstrating chair caning at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110624,
    "file": "FA4747",
    "Florida Folk Festival": 76,
    "description": "Pam Maneeratana demonstrating Thai fruit and vegetable carving at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110625,
    "file": "FA4748",
    "Florida Folk Festival": 47,
    "description": "Bobby Henry making a dugout canoe at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110626,
    "file": "FA4749",
    "Florida Folk Festival": 69,
    "description": "Bobby Henry, center, starting to work on a dugout canoe at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110627,
    "file": "FA4750",
    "Florida Folk Festival": 69,
    "description": "Bobby Henry, center, starting to work on a dugout canoe at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110628,
    "file": "FA4751",
    "Florida Folk Festival": 70,
    "description": "Atsuko Lefcourte, left, tying an obi for Kathy Levanthal at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110633,
    "file": "FA4756",
    "Florida Folk Festival": 48,
    "description": "Greek embroidered quilt on display at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110634,
    "file": "FA4757",
    "Florida Folk Festival": 56,
    "description": "Anna King with display of Greek embroidery at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110636,
    "file": "FA4759",
    "Florida Folk Festival": 39,
    "description": "Lavon Gawn smoking mullet at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110638,
    "file": "FA4761",
    "Florida Folk Festival": 39,
    "description": "Lavon Gawn smoking mullet at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110640,
    "file": "FA4763",
    "Florida Folk Festival": 24,
    "description": "Lavon Gawn at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110641,
    "file": "FA4764",
    "Florida Folk Festival": 47,
    "description": "Lavon Gawn, right, smoking mullet at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110649,
    "file": "FA4772",
    "Florida Folk Festival": 72,
    "description": "Basket maker demonstrating pine needle basketry techniques at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110651,
    "file": "FA4774",
    "Florida Folk Festival": 69,
    "description": "Atsuko Lefcourte demonstrating Ikebana flower arranging at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110653,
    "file": "FA4776",
    "Florida Folk Festival": 54,
    "description": "Rufus Adams and apprentice Annie Sellers at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110655,
    "file": "FA4778",
    "Florida Folk Festival": 73,
    "description": "Young boy playing in the Florida State Fiddlers Competition at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110656,
    "file": "FA4779",
    "Florida Folk Festival": 80,
    "description": "Young girl competing in the Florida State Fiddlers Competition during the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110657,
    "file": "FA4780",
    "Florida Folk Festival": 73,
    "description": "Boy competing in the Florida State Fiddlers Competition during the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110661,
    "file": "FA4784",
    "Florida Folk Festival": 44,
    "description": "Chair seat maker Annie Sellers at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110662,
    "file": "FA4784A",
    "Florida Folk Festival": 53,
    "description": "Tom Staley and Alexa Jaffurs performing at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110663,
    "file": "FA4785",
    "Florida Folk Festival": 58,
    "description": "Julian Lewis demonstrating palmetto basketry at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110664,
    "file": "FA4786",
    "Florida Folk Festival": 40,
    "description": "Display of handmade brooms at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110667,
    "file": "FA4789",
    "Florida Folk Festival": 51,
    "description": "Tom Thompson making white oak baskets at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110669,
    "file": "FA4791",
    "Florida Folk Festival": 29,
    "description": "Woman with whip at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110670,
    "file": "FA4792",
    "Florida Folk Festival": 53,
    "description": "Curly Dekle demonstrating whip cracking at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": "May 28, 1988"
  },
  {
    "id": 110672,
    "file": "FA4794",
    "Florida Folk Festival": 76,
    "description": "Pam Maneeratana demonstrating Thai fruit and vegetable carving at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110673,
    "file": "FA4795",
    "Florida Folk Festival": 50,
    "description": "Bamboo flute maker George Tortorelli at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110674,
    "file": "FA4796",
    "Florida Folk Festival": 71,
    "description": "Manuel Albalate demonstrating Venezuelan Yare mask making at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110676,
    "file": "FA4798",
    "Florida Folk Festival": 73,
    "description": "Bill Nichols demonstrating the use of old woodworking tools at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110677,
    "file": "FA4799",
    "Florida Folk Festival": 76,
    "description": "Pam Maneeratana demonstrating Thai fruit and vegetable carving at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110680,
    "file": "FA4802",
    "Florida Folk Festival": 49,
    "description": "Display of brooms made by Bill Case at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110681,
    "file": "FA4803",
    "Florida Folk Festival": 54,
    "description": "Charlie Lewis demonstrating wood carving at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110682,
    "file": "FA4804",
    "Florida Folk Festival": 53,
    "description": "Charlie Lewis showing his wood carvings at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110683,
    "file": "FA4805",
    "Florida Folk Festival": 59,
    "description": "S. H. Browning with his laminated wood crafts at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110685,
    "file": "FA4807",
    "Florida Folk Festival": 55,
    "description": "Tom Thompson, maker of white oak baskets, at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110687,
    "file": "FA4809",
    "Florida Folk Festival": 45,
    "description": "Father of broom maker Bill Case at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110688,
    "file": "FA4810",
    "Florida Folk Festival": 38,
    "description": "Brooms made by Bill Case at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110689,
    "file": "FA4811",
    "Florida Folk Festival": 38,
    "description": "Brooms made by Bill Case at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 110693,
    "file": "FA4815",
    "Florida Folk Festival": 61,
    "description": "The Kenneret Dancers teaching children to dance at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110695,
    "file": "FA4817",
    "Florida Folk Festival": 53,
    "description": "Jesus Rodriguez playing Venezuelan harp at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110697,
    "file": "FA4819",
    "Florida Folk Festival": 70,
    "description": "Carl Hanson demonstrating fishing fly tying for children at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110698,
    "file": "FA4820",
    "Florida Folk Festival": 59,
    "description": "Carl Hanson teaching fishing fly tying to boy at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110699,
    "file": "FA4821",
    "Florida Folk Festival": 57,
    "description": "Uriel Goldsmith teaching Jewish calligraphy at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110710,
    "file": "FA4832",
    "Florida Folk Festival": 71,
    "description": "Jaya Radhakrishnan teaching East Indian dance to children at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110711,
    "file": "FA4834",
    "Florida Folk Festival": 26,
    "description": "Man clogging at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110714,
    "file": "FA4837",
    "Florida Folk Festival": 50,
    "description": "The New Southern Ramblers performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110715,
    "file": "FA4838",
    "Florida Folk Festival": 33,
    "description": "Musician performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110716,
    "file": "FA4839",
    "Florida Folk Festival": 33,
    "description": "Musician performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110725,
    "file": "FA4848",
    "Florida Folk Festival": 62,
    "description": "Sonny Edwards, left, performing with Bobby Hicks at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110726,
    "file": "FA4849",
    "Florida Folk Festival": 44,
    "description": "Bobby Hicks, right, performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110727,
    "file": "FA4850",
    "Florida Folk Festival": 40,
    "description": "Roy Book Binder performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110729,
    "file": "FA4852",
    "Florida Folk Festival": 40,
    "description": "Roy Book Binder performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110736,
    "file": "FA4859",
    "Florida Folk Festival": 25,
    "description": "Log rolling at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110737,
    "file": "FA4860",
    "Florida Folk Festival": 25,
    "description": "Log rolling at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110738,
    "file": "FA4861",
    "Florida Folk Festival": 31,
    "description": "Ice water station at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110739,
    "file": "FA4862",
    "Florida Folk Festival": 25,
    "description": "Log rolling at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110740,
    "file": "FA4863",
    "Florida Folk Festival": 45,
    "description": "Uriel Goldsmith drawing Ketubah at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110744,
    "file": "FA4867",
    "Florida Folk Festival": 20,
    "description": "Finale of the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110749,
    "file": "FA4872",
    "Florida Folk Festival": 47,
    "description": "Don Grooms and friends performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110750,
    "file": "FA4873",
    "Florida Folk Festival": 38,
    "description": "Musical group performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110751,
    "file": "FA4874",
    "Florida Folk Festival": 36,
    "description": "String band performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": 1989
  },
  {
    "id": 110752,
    "file": "FA4875",
    "Florida Folk Festival": 48,
    "description": "Reverend Jimmy Williams performing at the 1989 Florida Folk Festival - White Springs, Florida.",
    "year": 1989
  },
  {
    "id": 110754,
    "file": "FA4876",
    "Florida Folk Festival": 45,
    "description": "The Culbreath Family performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1989"
  },
  {
    "id": 110755,
    "file": "FA4877",
    "Florida Folk Festival": 68,
    "description": "Fiddler Julian \"Goose\" Culbreath and family performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1989"
  },
  {
    "id": 110758,
    "file": "FA4878",
    "Florida Folk Festival": 32,
    "description": "Red Tam performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1989"
  },
  {
    "id": 110759,
    "file": "FA4879",
    "Florida Folk Festival": 32,
    "description": "Red Tam performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1989"
  },
  {
    "id": 110760,
    "file": "FA4880",
    "Florida Folk Festival": 44,
    "description": "Bobby Hicks, right, performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1989"
  },
  {
    "id": 110761,
    "file": "FA4881",
    "Florida Folk Festival": 42,
    "description": "The Makley family performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1989"
  },
  {
    "id": 110762,
    "file": "FA4882",
    "Florida Folk Festival": 42,
    "description": "The Makley family performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1989"
  },
  {
    "id": 110763,
    "file": "FA4883",
    "Florida Folk Festival": 42,
    "description": "The Makley family performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1989"
  },
  {
    "id": 110766,
    "file": "FA4886",
    "Florida Folk Festival": 47,
    "description": "Don Grooms and friends performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1989"
  },
  {
    "id": 110768,
    "file": "FA4888",
    "Florida Folk Festival": 49,
    "description": "Tammy Murray and friends performing at the 1989 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1989"
  },
  {
    "id": 110779,
    "file": "FA4898",
    "Florida Folk Festival": 47,
    "description": "Lisa Martin and family performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 110780,
    "file": "FA4899",
    "Florida Folk Festival": 47,
    "description": "Lisa Martin and family performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 110783,
    "file": "FA4902",
    "Florida Folk Festival": 50,
    "description": "George Delves and friends performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 110784,
    "file": "FA4903",
    "Florida Folk Festival": 60,
    "description": "Dewey Balfa of the Savoy Cajun Band performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 110785,
    "file": "FA4904",
    "Florida Folk Festival": 67,
    "description": "Ann and Mark Savoy of the Savoy Cajun Band performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 110786,
    "file": "FA4905",
    "Florida Folk Festival": 60,
    "description": "Dewey Balfa of the Savoy Cajun Band performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 110788,
    "file": "FA4907",
    "Florida Folk Festival": 49,
    "description": "Tammy Murray and friends performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 110789,
    "file": "FA4908",
    "Florida Folk Festival": 49,
    "description": "Tammy Murray and friends performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 110790,
    "file": "FA4909",
    "Florida Folk Festival": 36,
    "description": "Barry Sager performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 110791,
    "file": "FA4909A",
    "Florida Folk Festival": 49,
    "description": "Tammy Murray and friends performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 110792,
    "file": "FA4912",
    "Florida Folk Festival": 64,
    "description": "Florencio Baro and Cuban Bembe drummers performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 110795,
    "file": "FA4915",
    "Florida Folk Festival": 45,
    "description": "Girls dancing to Cuban drumming at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 110796,
    "file": "FA4916",
    "Florida Folk Festival": 61,
    "description": "Annie Sellers weaving a corn shuck chair bottom at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 110799,
    "file": "FA4919",
    "Florida Folk Festival": 41,
    "description": "Curly Dekle braiding a whip at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 110801,
    "file": "FA4921",
    "Florida Folk Festival": 65,
    "description": "Chuck Carr carving his \"Crazy Convic\" fishing lures at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 110813,
    "file": "FA4988",
    "Florida Folk Festival": 53,
    "description": "Konbo Guinyn band playing Haitian music at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 27, 1990"
  },
  {
    "id": 110814,
    "file": "FA4989",
    "Florida Folk Festival": 53,
    "description": "Konbo Guinyn band playing Haitian music at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 27, 1990"
  },
  {
    "id": 110816,
    "file": "FA4991",
    "Florida Folk Festival": 53,
    "description": "Konbo Guinyn band playing Haitian music at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 27, 1990"
  },
  {
    "id": 110818,
    "file": "FA4993",
    "Florida Folk Festival": 50,
    "description": "Haitian band Konbo Guinyn performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 27, 1990"
  },
  {
    "id": 110821,
    "file": "FA4996",
    "Florida Folk Festival": 50,
    "description": "Haitian band Konbo Guinyn performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 27, 1990"
  },
  {
    "id": 110822,
    "file": "FA4997",
    "Florida Folk Festival": 50,
    "description": "Haitian band Konbo Guinyn performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 27, 1990"
  },
  {
    "id": 110827,
    "file": "FA5002",
    "Florida Folk Festival": 50,
    "description": "Haitian band Konbo Guinyn performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 27, 1990"
  },
  {
    "id": 110828,
    "file": "FA5003",
    "Florida Folk Festival": 64,
    "description": "Children performing with Haitian band Konbo Guinyn at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 27, 1990"
  },
  {
    "id": 110830,
    "file": "FA5005",
    "Florida Folk Festival": 44,
    "description": "The Peyton Brothers performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1990"
  },
  {
    "id": 110831,
    "file": "FA5006",
    "Florida Folk Festival": 44,
    "description": "The Peyton Brothers performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1990"
  },
  {
    "id": 110832,
    "file": "FA5007",
    "Florida Folk Festival": 42,
    "description": "Burr Oak Ensemble performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1990"
  },
  {
    "id": 110833,
    "file": "FA5008",
    "Florida Folk Festival": 59,
    "description": "Wayne Martin, left, and Doug Gauss performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1990"
  },
  {
    "id": 110835,
    "file": "FA5010",
    "Florida Folk Festival": 53,
    "description": "Children playing outside the Purim tent at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1990"
  },
  {
    "id": 110836,
    "file": "FA5011",
    "Florida Folk Festival": 57,
    "description": "Children performing a Purim play, or spiel, at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1990"
  },
  {
    "id": 110838,
    "file": "FA5013",
    "Florida Folk Festival": 46,
    "description": "The Hot Pepper Steppers clogging at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 25, 1990"
  },
  {
    "id": 110839,
    "file": "FA5014",
    "Florida Folk Festival": 64,
    "description": "Nila Radhakrishnan performing an East Indian dance at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 25, 1990"
  },
  {
    "id": 110840,
    "file": "FA5015",
    "Florida Folk Festival": 55,
    "description": "Nila Radhakrishnan and her son performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 25, 1990"
  },
  {
    "id": 110841,
    "file": "FA5016",
    "Florida Folk Festival": 46,
    "description": "Fred Slade and friend performing at the 1990 Florida Folk Festival - White Springs, Florida",
    "year": "May 25, 1990"
  },
  {
    "id": 111002,
    "file": "FA5190",
    "Florida Folk Festival": 70,
    "description": "Michael Berg of Jacksonville with his carved wood duck decoys at the Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 111018,
    "file": "FA5208",
    "Florida Folk Festival": 62,
    "description": "Connie Palmer displaying her pine needle baskets at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 24, 1991"
  },
  {
    "id": 111019,
    "file": "FA5209",
    "Florida Folk Festival": 51,
    "description": "Tom Thompson making white oak baskets at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 24, 1991"
  },
  {
    "id": 111020,
    "file": "FA5210",
    "Florida Folk Festival": 73,
    "description": "Bill Nichols demonstrating the use of old woodworking tools at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 24, 1991"
  },
  {
    "id": 111021,
    "file": "FA5211",
    "Florida Folk Festival": 73,
    "description": "Bill Nichols demonstrating the use of old woodworking tools at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 24, 1991"
  },
  {
    "id": 111024,
    "file": "FA5214",
    "Florida Folk Festival": 58,
    "description": "Ned Johnson and family members caning chairs at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 24, 1991"
  },
  {
    "id": 111027,
    "file": "FA5217",
    "Florida Folk Festival": 57,
    "description": "Jim Brock demonstrating bamboo flute making at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 24, 1991"
  },
  {
    "id": 111028,
    "file": "FA5218",
    "Florida Folk Festival": 57,
    "description": "Josephine Gomez weaving on a backstrap loom at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 24, 1991"
  },
  {
    "id": 111029,
    "file": "FA5219",
    "Florida Folk Festival": 53,
    "description": "John Cephas and Phil Wiggins performing at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 24, 1991"
  },
  {
    "id": 111041,
    "file": "FA5231",
    "Florida Folk Festival": 61,
    "description": "Key West Island Junkanoos playing calypso music at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 25, 1991"
  },
  {
    "id": 111042,
    "file": "FA5232",
    "Florida Folk Festival": 61,
    "description": "Key West Island Junkanoos playing calypso music at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 25, 1991"
  },
  {
    "id": 111043,
    "file": "FA5233",
    "Florida Folk Festival": 50,
    "description": "Key West Island Junkanoos performing at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 25, 1991"
  },
  {
    "id": 111044,
    "file": "FA5234",
    "Florida Folk Festival": 33,
    "description": "Quilter Sally Jones at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 25, 1991"
  },
  {
    "id": 111046,
    "file": "FA5237",
    "Florida Folk Festival": 50,
    "description": "Key West Island Junkanoos performing at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 25, 1991"
  },
  {
    "id": 111049,
    "file": "FA5240",
    "Florida Folk Festival": 54,
    "description": "Winners of the fiddle contest performing at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 25, 1991"
  },
  {
    "id": 111057,
    "file": "FA5248",
    "Florida Folk Festival": 44,
    "description": "Oxie Occiano at food booth during the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 26, 1991"
  },
  {
    "id": 111058,
    "file": "FA5250",
    "Florida Folk Festival": 43,
    "description": "The Johnson family performing at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 25, 1991"
  },
  {
    "id": 111059,
    "file": "FA5251",
    "Florida Folk Festival": 43,
    "description": "El Grupo Canaveral performing at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 25, 1991"
  },
  {
    "id": 111060,
    "file": "FA5252",
    "Florida Folk Festival": 58,
    "description": "Sarasota Scottish Country Dancers performing at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 25, 1991"
  },
  {
    "id": 111063,
    "file": "FA5255",
    "Florida Folk Festival": 53,
    "description": "John Cephas and Phil Wiggins performing at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": "May 25, 1991"
  },
  {
    "id": 111067,
    "file": "FA5259",
    "Florida Folk Festival": 84,
    "description": "Rufus Adams and step-daughter Annie Sellers making corn shuck chair bottoms at the Florida Folk Festival - White Springs, Florida.",
    "year": "1989 (circa)"
  },
  {
    "id": 111068,
    "file": "FA5260",
    "Florida Folk Festival": 52,
    "description": "Rufus Adams making corn shuck chair bottoms at the Florida Folk Festival - White Springs, Florida.",
    "year": "1989 (circa)"
  },
  {
    "id": 111069,
    "file": "FA5261",
    "Florida Folk Festival": 52,
    "description": "Rufus Adams making corn shuck chair bottoms at the Florida Folk Festival - White Springs, Florida.",
    "year": "1989 (circa)"
  },
  {
    "id": 111085,
    "file": "FA5277",
    "Florida Folk Festival": 47,
    "description": "Curly Dekle showing his cow whips at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": 1992
  },
  {
    "id": 111095,
    "file": "FA5291",
    "Florida Folk Festival": 38,
    "description": "Gamble Rogers performing at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 111100,
    "file": "FA5298",
    "Florida Folk Festival": 38,
    "description": "Gamble Rogers performing at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 111101,
    "file": "FA5299",
    "Florida Folk Festival": 63,
    "description": "Bob Kogut, Tim Higgins and Bill Dudley performing at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": "May 23, 1992"
  },
  {
    "id": 111103,
    "file": "FA5302",
    "Florida Folk Festival": 73,
    "description": "The Cross Creek Cloggers performing on the old marble stage at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": "May 23, 1992"
  },
  {
    "id": 111104,
    "file": "FA5303",
    "Florida Folk Festival": 73,
    "description": "The Cross Creek Cloggers performing on the old marble stage at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": "May 23, 1992"
  },
  {
    "id": 111105,
    "file": "FA5304",
    "Florida Folk Festival": 59,
    "description": "Goose Culbreath, old-time fiddler, performing at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": 1992
  },
  {
    "id": 111111,
    "file": "FA5310",
    "Florida Folk Festival": 34,
    "description": "Southwind performing at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": "May 22, 1992"
  },
  {
    "id": 111112,
    "file": "FA5311",
    "Florida Folk Festival": 52,
    "description": "Salt Run from St. Augustine performing at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": 1992
  },
  {
    "id": 111113,
    "file": "FA5323",
    "Florida Folk Festival": 70,
    "description": "Zion Temple Holiness Church Rediscovery Choir performing at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": 1992
  },
  {
    "id": 111114,
    "file": "FA5324",
    "Florida Folk Festival": 42,
    "description": "Burr Oak Ensemble performing at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": 1992
  },
  {
    "id": 111116,
    "file": "FA5326",
    "Florida Folk Festival": 42,
    "description": "Burr Oak Ensemble performing at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": 1992
  },
  {
    "id": 111117,
    "file": "FA5327",
    "Florida Folk Festival": 47,
    "description": "Robert Dixon singing cowboy songs at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": 1992
  },
  {
    "id": 111121,
    "file": "FA5331",
    "Florida Folk Festival": 25,
    "description": "Young women at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": 1992
  },
  {
    "id": 111122,
    "file": "FA5332",
    "Florida Folk Festival": 52,
    "description": "Nila Radhakrishnan addresses the crowd at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": 1992
  },
  {
    "id": 111123,
    "file": "FA5333",
    "Florida Folk Festival": 43,
    "description": "Nila Radhakrishnan performing at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": 1992
  },
  {
    "id": 111125,
    "file": "FA5335",
    "Florida Folk Festival": 43,
    "description": "Nila Radhakrishnan performing at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": 1992
  },
  {
    "id": 111128,
    "file": "FA5338",
    "Florida Folk Festival": 63,
    "description": "Norteno accordion player Tomas Granado performing at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": "May 22, 1992"
  },
  {
    "id": 111135,
    "file": "FA5345",
    "Florida Folk Festival": 63,
    "description": "Norteno accordion player Tomas Granado performing at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": "May 22, 1992"
  },
  {
    "id": 111139,
    "file": "FA5349",
    "Florida Folk Festival": 85,
    "description": "The Beseda Dancers of Masaryktown performing Czechoslovakian folk dance at the 1992 Florida Folk Festival - White Springs, Florida .",
    "year": "May 22, 1992"
  },
  {
    "id": 111141,
    "file": "FA5351",
    "Florida Folk Festival": 85,
    "description": "The Beseda Dancers of Masaryktown performing Czechoslovakian folk dance at the 1992 Florida Folk Festival - White Springs, Florida .",
    "year": "May 22, 1992"
  },
  {
    "id": 111142,
    "file": "FA5352",
    "Florida Folk Festival": 85,
    "description": "The Beseda Dancers of Masaryktown performing Czechoslovakian folk dance at the 1992 Florida Folk Festival - White Springs, Florida .",
    "year": "May 22, 1992"
  },
  {
    "id": 111143,
    "file": "FA5353",
    "Florida Folk Festival": 85,
    "description": "The Beseda Dancers of Masaryktown performing Czechoslovakian folk dance at the 1992 Florida Folk Festival - White Springs, Florida .",
    "year": "May 22, 1992"
  },
  {
    "id": 111144,
    "file": "FA5354",
    "Florida Folk Festival": 42,
    "description": "The Makley family performing at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": "May 22, 1992"
  },
  {
    "id": 111147,
    "file": "FA5357",
    "Florida Folk Festival": 46,
    "description": "James Kelly playing Irish fiddle at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": "May 22, 1992"
  },
  {
    "id": 111148,
    "file": "FA5358",
    "Florida Folk Festival": 46,
    "description": "James Kelly playing Irish fiddle at the 1992 Florida Folk Festival - White Springs, Florida.",
    "year": "May 22, 1992"
  },
  {
    "id": 111156,
    "file": "FA5366",
    "Florida Folk Festival": 30,
    "description": "Gandy dancers singing at the Florida Folk Festival - White Springs, Florida",
    "year": 1993
  },
  {
    "id": 111163,
    "file": "FA5374",
    "Florida Folk Festival": 56,
    "description": "Crew laying track for Gandy Dancers performance at the Florida Folk Festival - White Springs, Florida",
    "year": "May 25, 1993"
  },
  {
    "id": 111188,
    "file": "FA5401",
    "Florida Folk Festival": 60,
    "description": "Bill Monroe and the Blue Grass Boys performing at the 1993 Florida Folk Festival - White Springs, Florida",
    "year": "May 29, 1993"
  },
  {
    "id": 111241,
    "file": "FA5457",
    "Florida Folk Festival": 55,
    "description": "Mt. Zion Holiness Temple Church choir performs at the Florida Folk Festival - White Springs, Florida",
    "year": "1989 (circa)"
  },
  {
    "id": 111765,
    "file": "FA5988",
    "Florida Folk Festival": 61,
    "description": "Lucille Jones demonstrating sweetgrass basket making at the Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 112229,
    "file": "FA6459",
    "Florida Folk Festival": 28,
    "description": "Bo Diddley performs at the Florida Folk Festival - White Springs, Florida .",
    "year": 1995
  },
  {
    "id": 112230,
    "file": "FA6460",
    "Florida Folk Festival": 28,
    "description": "Bo Diddley performs at the Florida Folk Festival - White Springs, Florida .",
    "year": 1995
  },
  {
    "id": 112233,
    "file": "FA6463",
    "Florida Folk Festival": 28,
    "description": "Bo Diddley performs at the Florida Folk Festival - White Springs, Florida .",
    "year": 1995
  },
  {
    "id": 112234,
    "file": "FA6464",
    "Florida Folk Festival": 28,
    "description": "Bo Diddley performs at the Florida Folk Festival - White Springs, Florida .",
    "year": 1995
  },
  {
    "id": 112235,
    "file": "FA6465",
    "Florida Folk Festival": 25,
    "description": "Toro Huaco group at the Florida Folk Festival - White Springs, Florida .",
    "year": 1995
  },
  {
    "id": 112236,
    "file": "FA6466",
    "Florida Folk Festival": 51,
    "description": "Marvin Silva (Left) and Jose Silva (Right) at the Florida Folk Festival - White Springs, Florida .",
    "year": 1995
  },
  {
    "id": 112237,
    "file": "FA6467",
    "Florida Folk Festival": 27,
    "description": "Toro Huaco perform at the Florida Folk Festival - White Springs, Florida .",
    "year": 1995
  },
  {
    "id": 112241,
    "file": "FA6471",
    "Florida Folk Festival": 17,
    "description": "Wako Kai at the Florida Folk Festival - White Springs, Florida .",
    "year": 1995
  },
  {
    "id": 112242,
    "file": "FA6472",
    "Florida Folk Festival": 17,
    "description": "Wako Kai at the Florida Folk Festival - White Springs, Florida .",
    "year": 1995
  },
  {
    "id": 112243,
    "file": "FA6473",
    "Florida Folk Festival": 71,
    "description": "Hymn liner Troy Demps (L) and his apprentice, Brian Wright (R) at the Florida Folk Festival - White Springs, Florida .",
    "year": 1995
  },
  {
    "id": 320482,
    "file": "FA9422",
    "Florida Folk Festival": 47,
    "description": "Sacred Harp singer Lane Albritton at the 1994 Florida Folk Festival.",
    "year": 1994
  },
  {
    "id": 272677,
    "file": "FA950545",
    "Florida Folk Festival": 48,
    "description": "Goose Culbreath, old-time fiddler, at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 115058,
    "file": "FN00063",
    "Florida Folk Festival": "#VALUE!",
    "description": "Portrait of composer Stephen C. Foster",
    "year": 1859
  },
  {
    "id": 115119,
    "file": "FN0129",
    "Florida Folk Festival": 48,
    "description": "Joe Dan Osceola and Linda Tiger Osceola at the Florida Folk Festival- White Springs, Florida",
    "year": 1964
  },
  {
    "id": 115123,
    "file": "FP0001",
    "Florida Folk Festival": 28,
    "description": "Punch and Judy Show at the Florida Folk Festival- White Springs, Florida",
    "year": "1955 (circa)"
  },
  {
    "id": 115133,
    "file": "FP51597",
    "Florida Folk Festival": 41,
    "description": "Creek Indian painter Fred Beaver at the Florida Folk Festival- White Springs, Florida",
    "year": 1958
  },
  {
    "id": 115137,
    "file": "FP516109",
    "Florida Folk Festival": 76,
    "description": "Winnifred Moon, Aubrey Fowler, Thelma Boltin, and Diane Weldon at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 115141,
    "file": "FP516116",
    "Florida Folk Festival": 44,
    "description": "White Springs Girls performing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 115142,
    "file": "FP516117",
    "Florida Folk Festival": 52,
    "description": "Bell School FFA String Band performing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 115143,
    "file": "FP516118",
    "Florida Folk Festival": 54,
    "description": "Sunshine Pickers of Lake City performing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 115159,
    "file": "FP516140",
    "Florida Folk Festival": 46,
    "description": "Members of Carver School dancing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 115161,
    "file": "FP516142",
    "Florida Folk Festival": 46,
    "description": "Members of Carver School dancing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 115167,
    "file": "FP516151",
    "Florida Folk Festival": 43,
    "description": "Melrose School chorus singing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 115176,
    "file": "FP516175",
    "Florida Folk Festival": 66,
    "description": "Stanley Brothers and Clinch Mountain Boys performing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 115177,
    "file": "FP516176",
    "Florida Folk Festival": 54,
    "description": "White Springs FFA String Band performing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 115181,
    "file": "FP516186",
    "Florida Folk Festival": 46,
    "description": "Lake City Squares square dancing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 115182,
    "file": "FP516187",
    "Florida Folk Festival": 46,
    "description": "Members of Carver School dancing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 115188,
    "file": "FP516200",
    "Florida Folk Festival": 64,
    "description": "Boy Scout troop #23 from Tarpon Springs performing at the 1959 Florida Folk Festival - White Springs, Florida",
    "year": 1959
  },
  {
    "id": 115205,
    "file": "FP51683",
    "Florida Folk Festival": 39,
    "description": "J.C. Moore leading a song at the 1959 Florida Folk Festival - White Springs, Florida",
    "year": 1959
  },
  {
    "id": 115212,
    "file": "FP51691",
    "Florida Folk Festival": 54,
    "description": "Jay Smith of Jacksonville playing guitar at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 115217,
    "file": "FP51697",
    "Florida Folk Festival": 27,
    "description": "Thelma Boltin at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 242137,
    "file": "FP77111C",
    "Florida Folk Festival": 41,
    "description": "Fiddler Zeke Stephens performing at the Florida Folk Festival while his wife Rosa beats the strings to carry the rhythm.",
    "year": "1969 (circa)"
  },
  {
    "id": 242067,
    "file": "FP77165A",
    "Florida Folk Festival": 87,
    "description": "Cabinet maker Kjell Lunestad from St. Augustine providing a demonstration at the 1976 Florida Folk Festival in White Springs, Florida.",
    "year": 1976
  },
  {
    "id": 242068,
    "file": "FP77165B",
    "Florida Folk Festival": 61,
    "description": "Cabinet maker Kjell Lunestad from St. Augustine at the 1976 Florida Folk Festival in White Springs, Florida.",
    "year": 1976
  },
  {
    "id": 242093,
    "file": "FP78329",
    "Florida Folk Festival": 54,
    "description": "View showing Anne Lunestad spinning flax at the 1978 Florida Folk Festival in White Springs, Florida.",
    "year": 1978
  },
  {
    "id": 242092,
    "file": "FP78330",
    "Florida Folk Festival": 41,
    "description": "Anne Lunestad spinning flax at the 1978 Florida Folk Festival in White Springs, Florida.",
    "year": 1978
  },
  {
    "id": 242090,
    "file": "FP78333",
    "Florida Folk Festival": 70,
    "description": "Evelyn C. Parks demonstrating palmetto weaving to a young boy at the Florida Folk Festival in White Springs, Florida.",
    "year": "1978 (circa)"
  },
  {
    "id": 242069,
    "file": "FP78450",
    "Florida Folk Festival": 84,
    "description": "Cabinet maker Kjell Lunestad from St. Augustine giving a demonstration at the 1977 Florida Folk Festival in White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 242065,
    "file": "FP78452",
    "Florida Folk Festival": 77,
    "description": "Spinner Anne Lunestad from St. Augustine giving a demonstration at the 1977 Florida Folk Festival in White Springs, Florida.",
    "year": 1977
  },
  {
    "id": 242048,
    "file": "FP78508",
    "Florida Folk Festival": 47,
    "description": "Gamble Rogers telling a tall tale at the 1978 Florida Folk Festival in White Springs, Florida.",
    "year": 1978
  },
  {
    "id": 242040,
    "file": "FP78525",
    "Florida Folk Festival": 58,
    "description": "Greek dancers from Tarpon Springs performing at the 1978 Florida Folk Festival in White Springs, Florida.",
    "year": 1978
  },
  {
    "id": 242032,
    "file": "FP78540",
    "Florida Folk Festival": 42,
    "description": "Seminole Indian woman sewing at the 1978 Florida Folk Festival in White Springs, Florida.",
    "year": 1978
  },
  {
    "id": 242030,
    "file": "FP79546",
    "Florida Folk Festival": 41,
    "description": "Filipino dancers performing at the 1960 Florida Folk Festival in White Springs, Florida.",
    "year": 1960
  },
  {
    "id": 242027,
    "file": "FP79549",
    "Florida Folk Festival": 35,
    "description": "Unidentified girls singing at the Florida Folk Festival in White Springs, Florida.",
    "year": "1950 (circa)"
  },
  {
    "id": 242029,
    "file": "FP79552",
    "Florida Folk Festival": 64,
    "description": "Parris Island Promenaders, from Beaufort, S.C., dancing at the Florida Folk Festival in White Springs, Florida.",
    "year": "1950 (circa)"
  },
  {
    "id": 242028,
    "file": "FP79556A",
    "Florida Folk Festival": 29,
    "description": "Woman sewing a quilt at the Florida Folk Festival in White Springs, Florida.",
    "year": "1950 (circa)"
  },
  {
    "id": 242025,
    "file": "FP79571A",
    "Florida Folk Festival": 32,
    "description": "School children dancing at the Florida Folk Festival in White Springs, Florida.",
    "year": "1950 (circa)"
  },
  {
    "id": 242024,
    "file": "FP79576",
    "Florida Folk Festival": 53,
    "description": "Florida Town Precision Cloggers dancing at the 1966 Florida Folk Festival in White Springs, Florida.",
    "year": 1966
  },
  {
    "id": 242023,
    "file": "FP79578",
    "Florida Folk Festival": 26,
    "description": "Jesse Law cooking at the Florida Folk Festival in White Springs, Florida.",
    "year": "1960 (circa)"
  },
  {
    "id": 242022,
    "file": "FP79579",
    "Florida Folk Festival": 39,
    "description": "View showing Jesse Law cooking at the Florida Folk Festival in White Springs, Florida.",
    "year": "1960 (circa)"
  },
  {
    "id": 242021,
    "file": "FP79580",
    "Florida Folk Festival": 39,
    "description": "Richard Clark making fry bread at the Florida Folk Festival in White Springs, Florida.",
    "year": "1960 (circa)"
  },
  {
    "id": 242020,
    "file": "FP79582",
    "Florida Folk Festival": 45,
    "description": "Kay Harris serving Spanish Bean soup at the Florida Folk Festival in White Springs, Florida.",
    "year": "1960 (circa)"
  },
  {
    "id": 241980,
    "file": "FP79705",
    "Florida Folk Festival": 63,
    "description": "Dollmaker Bertha Burnham demonstrating dollmaking at the 1979 Florida Folk Festival in White Springs, Florida.",
    "year": 1979
  },
  {
    "id": 241977,
    "file": "FP79706",
    "Florida Folk Festival": 63,
    "description": "Dollmaker Grace Langdale demonstrating dollmaking at the 1979 Florida Folk Festival in White Springs, Florida.",
    "year": 1979
  },
  {
    "id": 115449,
    "file": "FP8236",
    "Florida Folk Festival": 49,
    "description": "Thelma Boltin telling a \"Jack Tale\" at the 1954 Florida Folk Festival - White Springs, Florida",
    "year": 1954
  },
  {
    "id": 115452,
    "file": "FP8237",
    "Florida Folk Festival": 52,
    "description": "Filipino dancer Esther Jorolau dancing at the 1954 Florida Folk Festival- White Springs, Florida",
    "year": 1954
  },
  {
    "id": 115454,
    "file": "FP8238",
    "Florida Folk Festival": 19,
    "description": "Group portrait of Florida Folk Festival performers - White Springs, Florida",
    "year": 1954
  },
  {
    "id": 115456,
    "file": "FP8239",
    "Florida Folk Festival": 66,
    "description": "Square dancers accompanied by the Bell F.F.A. string band at the Florida Folk Festival- White Springs, Florida",
    "year": 1954
  },
  {
    "id": 115458,
    "file": "FP8240",
    "Florida Folk Festival": 41,
    "description": "Jump rope on the main stage at the 1954 Florida Folk Festival - White Springs, Florida",
    "year": 1954
  },
  {
    "id": 115459,
    "file": "FP8241",
    "Florida Folk Festival": 75,
    "description": "Women from the Taylor County Home Demonstration Club quilting at the 1954 Florida Folk Festival - White Springs, Florida",
    "year": 1954
  },
  {
    "id": 115460,
    "file": "FP8242",
    "Florida Folk Festival": 39,
    "description": "People performing a dance at the 1954 Florida Folk Festival - White Springs, Florida",
    "year": 1954
  },
  {
    "id": 115461,
    "file": "FP8243",
    "Florida Folk Festival": 64,
    "description": "May Kennedy Kane and another woman perform an Irish Jig at the Florida Folk Festival- White Springs, Florida",
    "year": 1954
  },
  {
    "id": 115487,
    "file": "FP82438",
    "Florida Folk Festival": 54,
    "description": "Will McLean and Gamble Rogers performing at the 1982 Florida Folk Festival - White Springs, Florida",
    "year": 1982
  },
  {
    "id": 320887,
    "file": "FP8244302",
    "Florida Folk Festival": 54,
    "description": "Organ grinder Roy Roberts and his monkey at the 1982 Florida Folk Festival in White Springs.",
    "year": 1982
  },
  {
    "id": 320879,
    "file": "FP8244303",
    "Florida Folk Festival": 39,
    "description": "Seminole dolls on display at the 1982 Florida Folk Festival in White Springs.",
    "year": 1982
  },
  {
    "id": 320893,
    "file": "FP8244304",
    "Florida Folk Festival": 80,
    "description": "Robert Osceola carving wood with axe in the Seminole Folklife Area at the 1982 Florida Folk Festival.",
    "year": 1982
  },
  {
    "id": 320892,
    "file": "FP8244305",
    "Florida Folk Festival": 47,
    "description": "Mary Billie making palmetto dolls at the 1982 Florida Folk Festival in White Springs.",
    "year": 1982
  },
  {
    "id": 320907,
    "file": "FP8244402",
    "Florida Folk Festival": 76,
    "description": "Gamble Rogers, right, with Roy Book Binder in a music workshop at the 1982 Florida Folk Festival in White Springs.",
    "year": 1982
  },
  {
    "id": 320906,
    "file": "FP8244403",
    "Florida Folk Festival": 41,
    "description": "Robert Osceola carving wood at the 1982 Florida Folk Festival in White Springs.",
    "year": 1982
  },
  {
    "id": 320905,
    "file": "FP8244404",
    "Florida Folk Festival": 47,
    "description": "Mary Billie making palmetto dolls at the 1982 Florida Folk Festival in White Springs.",
    "year": 1982
  },
  {
    "id": 320904,
    "file": "FP8244405",
    "Florida Folk Festival": 52,
    "description": "Alice Osceola making wiregrass baskets at the 1982 Florida Folk Festival in White Springs.",
    "year": 1982
  },
  {
    "id": 320903,
    "file": "FP8244406",
    "Florida Folk Festival": 50,
    "description": "Seminole woman making palmetto dolls at the 1982 Florida Folk Festival in White Springs.",
    "year": 1982
  },
  {
    "id": 320899,
    "file": "FP8244409",
    "Florida Folk Festival": 52,
    "description": "Musicians performing on the main stage at the 1982 Florida Folk Festival in White Springs.",
    "year": 1982
  },
  {
    "id": 320898,
    "file": "FP8244410",
    "Florida Folk Festival": 33,
    "description": "Performers on stage at the 1982 Florida Folk Festival in White Springs.",
    "year": 1982
  },
  {
    "id": 320897,
    "file": "FP8244411",
    "Florida Folk Festival": 80,
    "description": "Storyteller Thelma Boltin and folk musician Gamble Rogers on stage at the 1982 Florida Folk Festival.",
    "year": 1982
  },
  {
    "id": 320896,
    "file": "FP8244413",
    "Florida Folk Festival": 39,
    "description": "Folk musician Will McLean at the 1982 Florida Folk Festival in White Springs.",
    "year": 1982
  },
  {
    "id": 115493,
    "file": "FP82445",
    "Florida Folk Festival": 57,
    "description": "Mary McClain (L) and Ida Goodson performing at the 1982 Florida Folk Festival - White Springs, Florida.",
    "year": 1982
  },
  {
    "id": 115494,
    "file": "FP8245",
    "Florida Folk Festival": 85,
    "description": "Seminole Indian Billy Bowlegs III with Creek Indian painter Fred Beaver at the 1954 Florida Folk Festival- White Springs, Florida",
    "year": 1954
  },
  {
    "id": 115495,
    "file": "FP8246",
    "Florida Folk Festival": 69,
    "description": "Creek Indian painter Fred Beaver looking at his artwork at the 1954 Florida Folk Festival- White Springs, Florida",
    "year": 1954
  },
  {
    "id": 115496,
    "file": "FP8247",
    "Florida Folk Festival": 85,
    "description": "Group portrait of Seminole Indians, Creek Indians, and Dr. Alton Morris at the 1954 Florida Folk Festival - White Springs, Florida",
    "year": 1954
  },
  {
    "id": 115497,
    "file": "FP8248",
    "Florida Folk Festival": 41,
    "description": "Square dancers and a band peform at the Florida Folk Festival- White Springs, Florida",
    "year": 1954
  },
  {
    "id": 115498,
    "file": "FP82485",
    "Florida Folk Festival": 74,
    "description": "Jaya Radhakrishnan and her son Roger performing Indian music at the 1982 Florida Folk Festival - White Springs, Florida.",
    "year": 1982
  },
  {
    "id": 115499,
    "file": "FP82488",
    "Florida Folk Festival": 61,
    "description": "Jaya Radhakrishnan performing Indian folk music at the 1982 Florida Folk Festival - White Springs, Florida",
    "year": 1982
  },
  {
    "id": 115501,
    "file": "FP82490",
    "Florida Folk Festival": 39,
    "description": "Shoestring Puppet Theater at the 1982 Florida Folk Festival - White Springs, Florida",
    "year": 1982
  },
  {
    "id": 115502,
    "file": "FP82491",
    "Florida Folk Festival": 44,
    "description": "Shoestring Puppet Theater show at the 1982 Florida Folk Festival - White Springs, Florida",
    "year": 1982
  },
  {
    "id": 115503,
    "file": "FP82497",
    "Florida Folk Festival": 77,
    "description": "Jaya Radhakrishnan's daughter Nila performing East Indian dance at the 1982 Florida Folk Festival - White Springs, Florida",
    "year": 1982
  },
  {
    "id": 115515,
    "file": "FP8250",
    "Florida Folk Festival": 50,
    "description": "Ruth Neal, of Gainesville, playing guitar at the Florida Folk Festival- White Springs, Florida",
    "year": 1954
  },
  {
    "id": 115521,
    "file": "FP8250A",
    "Florida Folk Festival": 49,
    "description": "Square dancers and a piano player peform at the Florida Folk Festival- White Springs, Florida",
    "year": 1954
  },
  {
    "id": 115583,
    "file": "FP831386",
    "Florida Folk Festival": 31,
    "description": "Food being cooked at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115584,
    "file": "FP83138A",
    "Florida Folk Festival": 40,
    "description": "Women working in food area at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115594,
    "file": "FP83140A",
    "Florida Folk Festival": 40,
    "description": "Tobacco leaves in a basket at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115595,
    "file": "FP83140B",
    "Florida Folk Festival": 64,
    "description": "Arnetta Poole and Jesse Mae Newsome holding plants at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115596,
    "file": "FP83140C",
    "Florida Folk Festival": 30,
    "description": "Alfonso Jennings at the 1983 Florida Folk Festival holding a basket he made - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115597,
    "file": "FP83140D",
    "Florida Folk Festival": 60,
    "description": "Estelle McGauley holding up her crocheted item at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115598,
    "file": "FP83140E",
    "Florida Folk Festival": 39,
    "description": "Essie Roundtree with food at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115621,
    "file": "FP831473",
    "Florida Folk Festival": 38,
    "description": "Country Clyde playing guitar at 1983 Florida Folk Festival with Dennie Ryals on fiddle - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115622,
    "file": "FP831476",
    "Florida Folk Festival": 78,
    "description": "Classic country music played for shoeshine rag by Frank Mitchell at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115623,
    "file": "FP83147A",
    "Florida Folk Festival": 67,
    "description": "Members of the Suwannee River Five stringband playing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115624,
    "file": "FP83147B",
    "Florida Folk Festival": 41,
    "description": "Donald Johns singing gospel at the 1983 Florida Folk Festival - White Springs, Florida.",
    "year": 1983
  },
  {
    "id": 115627,
    "file": "FP831481",
    "Florida Folk Festival": 39,
    "description": "Thelma Pacetti crocheting at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115628,
    "file": "FP831488",
    "Florida Folk Festival": 45,
    "description": "Cross Creek Cloggers performing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115629,
    "file": "FP83148A",
    "Florida Folk Festival": 85,
    "description": "Secretary of State George Firestone with the Junkanoos band of Key West at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115630,
    "file": "FP831494",
    "Florida Folk Festival": 49,
    "description": "Linda Waldron making a palmetto hat at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115632,
    "file": "FP83149B",
    "Florida Folk Festival": 43,
    "description": "Artist Pharaoh Baker painting at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115636,
    "file": "FP83150A",
    "Florida Folk Festival": 44,
    "description": "Shoestring Puppet Theater show at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115637,
    "file": "FP83150B",
    "Florida Folk Festival": 36,
    "description": "Anne Lunestad spinning at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115638,
    "file": "FP83150C",
    "Florida Folk Festival": 49,
    "description": "Mandeer Restaurant employee working at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115639,
    "file": "FP83150D",
    "Florida Folk Festival": 18,
    "description": "Sign at the 1983 Florida Folk Festival for Marie Norris' home canning - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115640,
    "file": "FP83150E",
    "Florida Folk Festival": 44,
    "description": "Seminole fry bread preparation at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115641,
    "file": "FP831512",
    "Florida Folk Festival": 56,
    "description": "Young girl watching Bill Case make a broom at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115642,
    "file": "FP831517",
    "Florida Folk Festival": 38,
    "description": "Bill Case making a broom at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115643,
    "file": "FP831523",
    "Florida Folk Festival": 49,
    "description": "Betty Johnson weaving on a handloom at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115644,
    "file": "FP831528",
    "Florida Folk Festival": 72,
    "description": "Hon Versaggi and other Minorcan women doing palmetto craft at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115645,
    "file": "FP83152A",
    "Florida Folk Festival": 42,
    "description": "Pam Solano weaving palm hats at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115646,
    "file": "FP831559",
    "Florida Folk Festival": 42,
    "description": "Lucille Jones making baskets at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115647,
    "file": "FP831561",
    "Florida Folk Festival": 42,
    "description": "Pam Solano weaving palm hats at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115648,
    "file": "FP831567",
    "Florida Folk Festival": 59,
    "description": "Margaret Garrison making a sweet grass basket at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115649,
    "file": "FP83156A",
    "Florida Folk Festival": 60,
    "description": "Margaret Garrison weaving a sweet grass basket at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115650,
    "file": "FP831584",
    "Florida Folk Festival": 55,
    "description": "Bill Dudley and L.J. Slavin playing music at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115651,
    "file": "FP831602",
    "Florida Folk Festival": 36,
    "description": "Ida Goodson performing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115652,
    "file": "FP83160A",
    "Florida Folk Festival": 64,
    "description": "Man from the Community Revival Center cooking food at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115654,
    "file": "FP831629",
    "Florida Folk Festival": 43,
    "description": "Storyteller E.A. \"Frog\" Smith at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115655,
    "file": "FP83162A",
    "Florida Folk Festival": 43,
    "description": "Artist Pharaoh Baker painting at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115656,
    "file": "FP83162B",
    "Florida Folk Festival": 75,
    "description": "Bluegrass musician Bunch Bass with a \"magic\" horseshoe puzzle at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115658,
    "file": "FP83163A",
    "Florida Folk Festival": 42,
    "description": "Sherry Vann weaving palmetto at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115659,
    "file": "FP831645",
    "Florida Folk Festival": 36,
    "description": "Whipmaker Albert Triay at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115660,
    "file": "FP831646",
    "Florida Folk Festival": 47,
    "description": "Minorcan netmaker Wilford Masters at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115661,
    "file": "FP831647",
    "Florida Folk Festival": 59,
    "description": "Puppets used by the Shoestring Puppet Theater at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115662,
    "file": "FP83164A",
    "Florida Folk Festival": 38,
    "description": "Furniture maker Ira Kohn at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115664,
    "file": "FP83164C",
    "Florida Folk Festival": 45,
    "description": "Mae and Bob Noell during a skit at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115666,
    "file": "FP83164E",
    "Florida Folk Festival": 72,
    "description": "Domestic arts discussion at the Minorcan folklife area during the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115667,
    "file": "FP831657",
    "Florida Folk Festival": 46,
    "description": "Elan Chalford playing the fiddle at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115670,
    "file": "FP83165B",
    "Florida Folk Festival": 56,
    "description": "The hands of Lucille Jones making a basket at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115671,
    "file": "FP83165C",
    "Florida Folk Festival": 42,
    "description": "Lucille Jones making baskets at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115672,
    "file": "FP83165D",
    "Florida Folk Festival": 55,
    "description": "L.J. Slavin playing the hammered dulcimer at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115673,
    "file": "FP83165E",
    "Florida Folk Festival": 51,
    "description": "Zion Temple Holiness choir performing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115674,
    "file": "FP831664",
    "Florida Folk Festival": 70,
    "description": "Ida Goodson playing piano with the King Snake Blues Band at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115675,
    "file": "FP831666",
    "Florida Folk Festival": 38,
    "description": "Bill Nichols woodworking at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115676,
    "file": "FP83166A",
    "Florida Folk Festival": 73,
    "description": "Seminole Indian woman with her dolls and baskets on display at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115677,
    "file": "FP83166B",
    "Florida Folk Festival": 46,
    "description": "Leroy Lemay with his wooden toys at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115678,
    "file": "FP83166C",
    "Florida Folk Festival": 49,
    "description": "Joline and Bob Patterson performing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115679,
    "file": "FP83166D",
    "Florida Folk Festival": 47,
    "description": "Ukrainian folk dancers performing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115680,
    "file": "FP83166E",
    "Florida Folk Festival": 53,
    "description": "Women Ukrainian folk dancers performing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115681,
    "file": "FP83166F",
    "Florida Folk Festival": 64,
    "description": "Key West Island Junkanoos performing calypso music at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115683,
    "file": "FP83166H",
    "Florida Folk Festival": 41,
    "description": "Seminole Indian crafts area at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115684,
    "file": "FP831674",
    "Florida Folk Festival": 35,
    "description": "Tom Walton performing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115685,
    "file": "FP831676",
    "Florida Folk Festival": 43,
    "description": "Thelma Boltin telling a story at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115686,
    "file": "FP831679",
    "Florida Folk Festival": 51,
    "description": "Diamond Teeth Mary McClain performing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115688,
    "file": "FP83167B",
    "Florida Folk Festival": 42,
    "description": "Lucille Jones making baskets at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115689,
    "file": "FP83167C",
    "Florida Folk Festival": 30,
    "description": "Broom being made at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115690,
    "file": "FP83167D",
    "Florida Folk Festival": 62,
    "description": "James Billie and Don Grooms performing folk song at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115691,
    "file": "FP83167E",
    "Florida Folk Festival": 63,
    "description": "Don Grooms and Lloyd Baldwin performing folk song at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115692,
    "file": "FP831683",
    "Florida Folk Festival": 47,
    "description": "Doug Gauss performing a folk song at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115693,
    "file": "FP831686",
    "Florida Folk Festival": 67,
    "description": "Member of the Key West Island Junkanoos limbo dancing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115694,
    "file": "FP831689",
    "Florida Folk Festival": 69,
    "description": "Skip Johns and The Travelers performing bluegrass music at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115695,
    "file": "FP83168A",
    "Florida Folk Festival": 34,
    "description": "Del Suggs performing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115696,
    "file": "FP83168B",
    "Florida Folk Festival": 39,
    "description": "Steve Meisburg performing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115697,
    "file": "FP831696",
    "Florida Folk Festival": 85,
    "description": "Will McLean playing guitar and Marty Schuman on the autoharp performing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115698,
    "file": "FP831698",
    "Florida Folk Festival": 51,
    "description": "New Sand Mountain Wildcats performing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115699,
    "file": "FP83169A",
    "Florida Folk Festival": 38,
    "description": "Bill Nichols woodworking at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115700,
    "file": "FP83169B",
    "Florida Folk Festival": 70,
    "description": "Minorcan Albert Triay showing ranch whip to Bob Cottrell at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115701,
    "file": "FP831707",
    "Florida Folk Festival": 32,
    "description": "Baskets on display at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115702,
    "file": "FP83170A",
    "Florida Folk Festival": 49,
    "description": "Drava folkdance ensemble performing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115703,
    "file": "FP83170B",
    "Florida Folk Festival": 49,
    "description": "Basilica Cathedral choir performing at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115704,
    "file": "FP83170C",
    "Florida Folk Festival": 64,
    "description": "Key West Island Junkanoos performing calypso music at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115705,
    "file": "FP83170D",
    "Florida Folk Festival": 64,
    "description": "Key West Island Junkanoos performing calypso music at the 1983 Florida Folk Festival - White Springs, Florida",
    "year": 1983
  },
  {
    "id": 115944,
    "file": "FP85155",
    "Florida Folk Festival": 27,
    "description": "Thelma Boltin at the 1958 Florida Folk Festival- White Springs, Florida",
    "year": 1958
  },
  {
    "id": 115946,
    "file": "FP851551",
    "Florida Folk Festival": 43,
    "description": "Marynel Hughes playing a harp at the 1958 Florida Folk Festival- White Springs, Florida",
    "year": 1958
  },
  {
    "id": 115975,
    "file": "FP8610A",
    "Florida Folk Festival": 54,
    "description": "Seminole Indian canoe maker O.B. Osceola at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 116007,
    "file": "FP8630A",
    "Florida Folk Festival": 59,
    "description": "Seminole Tribe of Florida Chairman Jim Billie at the 1985 Florida Folk Festival making a lean-to shelter - White Springs, Florida.",
    "year": 1985
  },
  {
    "id": 116008,
    "file": "FP8632A",
    "Florida Folk Festival": 64,
    "description": "Key West Island Junkanoos conga drummer performing at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 116009,
    "file": "FP8633A",
    "Florida Folk Festival": 71,
    "description": "Chanda Rondeau (later Newman) performing Irish step dance at the 1984 Florida Folk Festival - White Springs, Florida.",
    "year": 1984
  },
  {
    "id": 116010,
    "file": "FP8634A",
    "Florida Folk Festival": 86,
    "description": "Hands of Czechoslovakian Edie Mihilek scratching design on an Easter egg at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 116013,
    "file": "FP8640",
    "Florida Folk Festival": 45,
    "description": "Cross Creek Cloggers performing at the 1982 Florida Folk Festival - White Springs, Florida",
    "year": 1982
  },
  {
    "id": 116033,
    "file": "FP8669A",
    "Florida Folk Festival": 35,
    "description": "Kjell Lunestad woodworking at the Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 116034,
    "file": "FP8670A",
    "Florida Folk Festival": 51,
    "description": "Loran Terry making a sage brush broom at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 116035,
    "file": "FP869A",
    "Florida Folk Festival": 51,
    "description": "Juanita Osceola making Seminole dolls at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 116039,
    "file": "FP88924",
    "Florida Folk Festival": 51,
    "description": "Beseda dancers of Masaryktown dancing at the 1962 Florida Folk Festival- White Springs, Florida",
    "year": 1962
  },
  {
    "id": 116040,
    "file": "FP88927",
    "Florida Folk Festival": 51,
    "description": "Beseda dancers of Masaryktown dancing at the 1962 Florida Folk Festival- White Springs, Florida",
    "year": 1962
  },
  {
    "id": 116062,
    "file": "FP889446",
    "Florida Folk Festival": 60,
    "description": "Fiddler Zeke Stephens of Marianna performs during the 1957 Florida Folk Festival- White Springs, Florida",
    "year": 1957
  },
  {
    "id": 116072,
    "file": "FP889470",
    "Florida Folk Festival": 38,
    "description": "White Springs Choraliers at the 1957 Florida Folk Festival- White Springs, Florida",
    "year": 1957
  },
  {
    "id": 116079,
    "file": "FP889487",
    "Florida Folk Festival": 36,
    "description": "String Band performing at the 1957 Florida Folk Festival- White Springs, Florida",
    "year": 1957
  },
  {
    "id": 116092,
    "file": "FP903182",
    "Florida Folk Festival": 40,
    "description": "Billy Bowlegs III speaking at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 116101,
    "file": "FP951612",
    "Florida Folk Festival": 36,
    "description": "Day School Rhythm Band at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 116102,
    "file": "FP951613",
    "Florida Folk Festival": 36,
    "description": "Day School Rhythm Band at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 116104,
    "file": "FP951615",
    "Florida Folk Festival": 66,
    "description": "Day Elementary and Junior High School chorus singing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 116105,
    "file": "FP951616",
    "Florida Folk Festival": 66,
    "description": "Day Elementary and Junior High School chorus singing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 116107,
    "file": "FP951619",
    "Florida Folk Festival": 42,
    "description": "Carver School chorus singing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 116110,
    "file": "FP951623",
    "Florida Folk Festival": 72,
    "description": "Guitarists from the Bell School FFA String Band performing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 116111,
    "file": "FP951624",
    "Florida Folk Festival": 52,
    "description": "Bell School FFA String Band performing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 116112,
    "file": "FP951627",
    "Florida Folk Festival": 46,
    "description": "Members of Carver School dancing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 116118,
    "file": "FP951635",
    "Florida Folk Festival": 41,
    "description": "Baker County Band on parade at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 116119,
    "file": "FP951636",
    "Florida Folk Festival": 41,
    "description": "Baker County Band on parade at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 116120,
    "file": "FP951637",
    "Florida Folk Festival": 50,
    "description": "Thelma Boltin and Mrs. W.A. Saunders at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 116121,
    "file": "FP951644",
    "Florida Folk Festival": 55,
    "description": "Members of Bolden School of Music dancing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 116122,
    "file": "FP951645",
    "Florida Folk Festival": 55,
    "description": "Members of Bolden School of Music dancing at the 1959 Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 116127,
    "file": "FP951652",
    "Florida Folk Festival": 37,
    "description": "Mount Dora Glee Club singing at the Florida Folk Festival- White Springs, Florida",
    "year": 1959
  },
  {
    "id": 255637,
    "file": "FS030061",
    "Florida Folk Festival": 62,
    "description": "Hungarian embroidery with other items on display at the 2003 Florida Folk Festival.",
    "year": 2003
  },
  {
    "id": 255776,
    "file": "FS030062",
    "Florida Folk Festival": 34,
    "description": "Hungarian embroidery at the 2003 Florida Folk Festival in White Springs, Florida.",
    "year": 2003
  },
  {
    "id": 255775,
    "file": "FS030063",
    "Florida Folk Festival": 47,
    "description": "Cuban santeria \"crown\" for Yemaya at the 2003 Florida Folk Festival in White Springs, Florida.",
    "year": 2003
  },
  {
    "id": 255769,
    "file": "FS030066",
    "Florida Folk Festival": 73,
    "description": "Eileen Brautman creating a Jewish Ketubah marriage contract at the 2003 Florida Folk Festival in White Springs, Florida.",
    "year": 2003
  },
  {
    "id": 118909,
    "file": "FS1114E",
    "Florida Folk Festival": 85,
    "description": "Folklorist Nancy Nusz introducing the Southwest Florida Steel Drum Band at the 1988 Florida Folk Festival- White Springs, Florida",
    "year": 1988
  },
  {
    "id": 119164,
    "file": "FS4691",
    "Florida Folk Festival": 29,
    "description": "Guitarist performing at the Florida Folk Festival- White Springs, Florida",
    "year": "1955 (circa)"
  },
  {
    "id": 119514,
    "file": "FS77247",
    "Florida Folk Festival": 54,
    "description": "Secretary of State Bruce A. Smathers speaking at the Florida Folk Festival - White Springs, Florida",
    "year": 1975
  },
  {
    "id": 119520,
    "file": "FS77254",
    "Florida Folk Festival": 45,
    "description": "Secretary of State Bruce A. Smathers at the Florida Folk Festival - White Springs, Florida",
    "year": 1975
  },
  {
    "id": 119521,
    "file": "FS77255",
    "Florida Folk Festival": 45,
    "description": "Secretary of State Bruce A. Smathers at the Florida Folk Festival - White Springs, Florida",
    "year": 1975
  },
  {
    "id": 119527,
    "file": "FS77284A",
    "Florida Folk Festival": 48,
    "description": "Tarpon Springs Greek Dancers performing at the Florida Folk Festival - White Springs, Florida",
    "year": 1975
  },
  {
    "id": 119528,
    "file": "FS77288",
    "Florida Folk Festival": 48,
    "description": "Larry Abrahms playing the mandolin at the 1975 Florida Folk Festival - White Springs, Florida",
    "year": 1975
  },
  {
    "id": 119533,
    "file": "FS77359A",
    "Florida Folk Festival": 24,
    "description": "Fiddler playing at the Florida Folk Festival - White Springs, Florida",
    "year": 1975
  },
  {
    "id": 119534,
    "file": "FS77399A",
    "Florida Folk Festival": 37,
    "description": "Women examining crafted item at the Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119536,
    "file": "FS77401A",
    "Florida Folk Festival": 79,
    "description": "Whip maker, Claude Sheppard of Gainesville, admiring some of his whips at the Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119538,
    "file": "FS77404",
    "Florida Folk Festival": 23,
    "description": "Jesse J. Aaron at the Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119541,
    "file": "FS77409",
    "Florida Folk Festival": 20,
    "description": "Loran Terry at the Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119542,
    "file": "FS77411C",
    "Florida Folk Festival": 31,
    "description": "Man carving stone at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119543,
    "file": "FS77412",
    "Florida Folk Festival": 31,
    "description": "Man carving stone at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119544,
    "file": "FS77415",
    "Florida Folk Festival": 41,
    "description": "Anne Lunestad spinning flax at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119547,
    "file": "FS77419",
    "Florida Folk Festival": 41,
    "description": "Anne Lunestad spinning flax at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119548,
    "file": "FS77420",
    "Florida Folk Festival": 41,
    "description": "Anne Lunestad spinning flax at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119549,
    "file": "FS77421",
    "Florida Folk Festival": 58,
    "description": "Artisan Kjell Lunestad making a wood carving at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119553,
    "file": "FS77450A",
    "Florida Folk Festival": 49,
    "description": "Seminole Indian canoe maker O.B. Osceola at the Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119554,
    "file": "FS77452A",
    "Florida Folk Festival": 43,
    "description": "O.B. Osceola making a dugout canoe at the Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119556,
    "file": "FS77463A",
    "Florida Folk Festival": 46,
    "description": "Seminole woman Juanita Osceola sewing at the Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119557,
    "file": "FS77466A",
    "Florida Folk Festival": 67,
    "description": "Seminole Indian woman in the process of making a root doll at the Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119569,
    "file": "FS77506A",
    "Florida Folk Festival": 55,
    "description": "Ella Mae Wilson accompanying Rev. N.L Williams at the Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119570,
    "file": "FS77507A",
    "Florida Folk Festival": 78,
    "description": "Mount Carmel Baptist Church choir accompanying Rev. N.L Williams at the 1977 Florida Folk Festival - White Springs, Florida",
    "year": 1977
  },
  {
    "id": 119593,
    "file": "FS781063",
    "Florida Folk Festival": 27,
    "description": "Man caning a chair at the Florida Folk Festival - White Springs, Florida",
    "year": "1978 (circa)"
  },
  {
    "id": 119598,
    "file": "FS781091",
    "Florida Folk Festival": 52,
    "description": "Moses Williams playing the diddley bow at the 1978 Florida Folk Festival",
    "year": 1978
  },
  {
    "id": 119603,
    "file": "FS781096",
    "Florida Folk Festival": 52,
    "description": "Moses Williams playing the diddley bow at the 1978 Florida Folk Festival",
    "year": 1978
  },
  {
    "id": 119604,
    "file": "FS781101",
    "Florida Folk Festival": 43,
    "description": "Looking at the weaves of an object at the Florida Folk Festival - White Springs, Florida",
    "year": "1978 (circa)"
  },
  {
    "id": 120196,
    "file": "FS80206",
    "Florida Folk Festival": 42,
    "description": "George Saunders making a net at the 1980 Florida Folk Festival - White Springs, Florida",
    "year": 1980
  },
  {
    "id": 120513,
    "file": "FS81396",
    "Florida Folk Festival": 39,
    "description": "Seminole dolls on display at the 1981 Florida Folk Festival - White Springs, Florida",
    "year": 1981
  },
  {
    "id": 120514,
    "file": "FS81397",
    "Florida Folk Festival": 45,
    "description": "Banjoes and dulcimer on display at the 1981 Florida Folk Festival - White Springs, Florida.",
    "year": 1981
  },
  {
    "id": 120527,
    "file": "FS81557",
    "Florida Folk Festival": 39,
    "description": "Sailfish Cloggers dancing at the 1981 Florida Folk Festival - White Springs, Florida",
    "year": 1981
  },
  {
    "id": 120807,
    "file": "FS82168",
    "Florida Folk Festival": 81,
    "description": "Gamble Rogers (R) and blues guitarist/singer Roy Book Binder performing at 1982 Florida Folk Festival- White Springs, Florida",
    "year": 1982
  },
  {
    "id": 121082,
    "file": "FS82814",
    "Florida Folk Festival": 17,
    "description": "Children at the Florida Folk Festival playing in a canoe - White Springs, Florida",
    "year": 1982
  },
  {
    "id": 121093,
    "file": "FS8286",
    "Florida Folk Festival": 32,
    "description": "Cross Creek Clogger dancing at Florida Folk Festival main stage - White Springs, Florida",
    "year": 1982
  },
  {
    "id": 121106,
    "file": "FS82916",
    "Florida Folk Festival": 38,
    "description": "Czech dancers performing at the 1982 Florida Folk Festival - White Springs, Florida.",
    "year": 1982
  },
  {
    "id": 121107,
    "file": "FS82919",
    "Florida Folk Festival": 38,
    "description": "Czech dancers performing at the 1982 Florida Folk Festival - White Springs, Florida.",
    "year": 1982
  },
  {
    "id": 121407,
    "file": "FS83287",
    "Florida Folk Festival": 33,
    "description": "Singer Mary McClain at the 1982 Florida Folk Festival - White Springs, Florida",
    "year": 1982
  },
  {
    "id": 121408,
    "file": "FS83289",
    "Florida Folk Festival": 39,
    "description": "Ida Goodson playing piano at the 1982 Florida Folk Festival - White Springs, Florida",
    "year": 1982
  },
  {
    "id": 121409,
    "file": "FS83290",
    "Florida Folk Festival": 38,
    "description": "Troy Lovelace performing at the 1982 Florida Folk Festival - White Springs, Florida",
    "year": 1982
  },
  {
    "id": 121410,
    "file": "FS83291",
    "Florida Folk Festival": 46,
    "description": "Dixie Jubilee Singers performing at the 1982 Florida Folk Festival - White Springs, Florida",
    "year": 1982
  },
  {
    "id": 121412,
    "file": "FS83294",
    "Florida Folk Festival": 40,
    "description": "Indian musician performing at the 1982 Florida Folk Festival - White Springs, Florida",
    "year": 1982
  },
  {
    "id": 121420,
    "file": "FS83296",
    "Florida Folk Festival": 70,
    "description": "Folk quartet Wind That Shakes the Barley Band performing at the 1982 Florida Folk Festival - White Springs, Florida",
    "year": 1982
  },
  {
    "id": 121422,
    "file": "FS83297",
    "Florida Folk Festival": 70,
    "description": "Folk quartet Wind That Shakes the Barley Band performing at the 1982 Florida Folk Festival - White Springs, Florida",
    "year": 1982
  },
  {
    "id": 121618,
    "file": "FS851031",
    "Florida Folk Festival": 55,
    "description": "Dixie Jubilee Singers performing gospel music at 1985 Florida Folk Festival- White Springs, Florida",
    "year": 1985
  },
  {
    "id": 121619,
    "file": "FS851036",
    "Florida Folk Festival": 53,
    "description": "Gamble Rogers (R) and Bob Pavitt performing at 1985 Florida Folk Festival- White Springs, Florida",
    "year": 1985
  },
  {
    "id": 121639,
    "file": "FS851335",
    "Florida Folk Festival": 16,
    "description": "Cowboys at the Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 121928,
    "file": "FS85253",
    "Florida Folk Festival": 51,
    "description": "New Sand Mountain Wildcats performing at the 1984 Florida Folk Festival - White Springs, Florida",
    "year": 1984
  },
  {
    "id": 122008,
    "file": "FS85831",
    "Florida Folk Festival": 45,
    "description": "Cross Creek Cloggers performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 122009,
    "file": "FS85838",
    "Florida Folk Festival": 45,
    "description": "Cross Creek Cloggers performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 122010,
    "file": "FS85842",
    "Florida Folk Festival": 32,
    "description": "Dancers performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 122011,
    "file": "FS85846",
    "Florida Folk Festival": 59,
    "description": "Member of the Cross Creek Cloggers performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 122012,
    "file": "FS85848",
    "Florida Folk Festival": 59,
    "description": "Member of the Cross Creek Cloggers performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": 1985
  },
  {
    "id": 122016,
    "file": "FS85874",
    "Florida Folk Festival": 55,
    "description": "Dixie Jubilee Singers performing gospel music at 1985 Florida Folk Festival- White Springs, Florida",
    "year": 1985
  },
  {
    "id": 122017,
    "file": "FS85889",
    "Florida Folk Festival": 34,
    "description": "Gamble Rogers performing at 1985 Florida Folk Festival- White Springs, Florida",
    "year": 1985
  },
  {
    "id": 122023,
    "file": "FS85909",
    "Florida Folk Festival": 43,
    "description": "Albert \"Buck\" Thompson performing at 1985 Florida Folk Festival- White Springs, Florida",
    "year": 1985
  },
  {
    "id": 122025,
    "file": "FS85922",
    "Florida Folk Festival": 43,
    "description": "Albert \"Buck\" Thompson performing at 1985 Florida Folk Festival- White Springs, Florida",
    "year": 1985
  },
  {
    "id": 122026,
    "file": "FS85951",
    "Florida Folk Festival": 34,
    "description": "Gamble Rogers performing at 1985 Florida Folk Festival- White Springs, Florida",
    "year": 1985
  },
  {
    "id": 122028,
    "file": "FS85954",
    "Florida Folk Festival": 55,
    "description": "Nila Radhakrishnan performing an Indian dance at 1985 Florida Folk Festival- White Springs, Florida",
    "year": 1985
  },
  {
    "id": 122031,
    "file": "FS85983",
    "Florida Folk Festival": 42,
    "description": "Hand crafted, wood carved banjos at 1985 Florida Folk Festival- White Springs, Florida",
    "year": 1985
  },
  {
    "id": 122032,
    "file": "FS85988",
    "Florida Folk Festival": 30,
    "description": "Sculpture on display at 1985 Florida Folk Festival- White Springs, Florida",
    "year": 1985
  },
  {
    "id": 122295,
    "file": "FS8642",
    "Florida Folk Festival": 35,
    "description": "Rufus Adams making a chair at the Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 122322,
    "file": "FS8644",
    "Florida Folk Festival": 40,
    "description": "Voncille Mallory making a chair at the Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 60234,
    "file": "fs86440",
    "Florida Folk Festival": 42,
    "description": "Ukrainian dancers performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": "May 24, 1985"
  },
  {
    "id": 60235,
    "file": "fs86444",
    "Florida Folk Festival": 42,
    "description": "Ukrainian dancers performing at the 1985 Florida Folk Festival - White Springs, Florida",
    "year": "May 24, 1985"
  },
  {
    "id": 122407,
    "file": "FS864643",
    "Florida Folk Festival": 45,
    "description": "Lucille Ranger-Brown reciting poetry at the Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 122409,
    "file": "FS864647",
    "Florida Folk Festival": 45,
    "description": "Lucille Ranger-Brown reciting poetry at the Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 122411,
    "file": "FS864650",
    "Florida Folk Festival": 57,
    "description": "Lucille Ranger-Brown performing a Jamaican dance at the Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 122415,
    "file": "FS864662",
    "Florida Folk Festival": 39,
    "description": "Rafael Ozambela rolling cigars at the Florida Folk Festival - White Springs, Florida.",
    "year": 1986
  },
  {
    "id": 122417,
    "file": "FS864665",
    "Florida Folk Festival": 39,
    "description": "Rafael Ozambela rolling cigars at the Florida Folk Festival - White Springs, Florida.",
    "year": 1986
  },
  {
    "id": 122419,
    "file": "FS864668",
    "Florida Folk Festival": 45,
    "description": "Glen Simmons building a glades skiff at the Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 122421,
    "file": "FS864677",
    "Florida Folk Festival": 45,
    "description": "Glen Simmons building a glades skiff at the Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 122422,
    "file": "FS864680",
    "Florida Folk Festival": 50,
    "description": "Jesus Rodriguez playing a Venezuelan harp at the Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 122424,
    "file": "FS864687",
    "Florida Folk Festival": 45,
    "description": "Harold Kalikow performing vaudeville at the Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 122425,
    "file": "FS864689",
    "Florida Folk Festival": 61,
    "description": "Lillian Kalikow playing piano during vaudeville show at the Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 122428,
    "file": "FS864723",
    "Florida Folk Festival": 60,
    "description": "Limone Joseph performing on a Haitian \"polambi\" during the Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 122429,
    "file": "FS864727",
    "Florida Folk Festival": 44,
    "description": "Limone Joseph with a Haitian dancer at the Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 122430,
    "file": "FS864747",
    "Florida Folk Festival": 45,
    "description": "Liliane Louis preparing Haitian food at the Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 122432,
    "file": "FS864750",
    "Florida Folk Festival": 42,
    "description": "Liliane Louis making Haitian food at the Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 122433,
    "file": "FS864752",
    "Florida Folk Festival": 40,
    "description": "Maria Pozos making Chicano food at the Florida Folk Festival - White Springs, Florida",
    "year": 1986
  },
  {
    "id": 122601,
    "file": "FS8658",
    "Florida Folk Festival": 51,
    "description": "Coconut palm crafts on display at the 34th annual Florida Folk Festival in White Springs.",
    "year": 1986
  },
  {
    "id": 122607,
    "file": "FS8663",
    "Florida Folk Festival": 51,
    "description": "Coconut palm crafts on display at the 34th annual Florida Folk Festival in White Springs.",
    "year": 1986
  },
  {
    "id": 123071,
    "file": "FS891081",
    "Florida Folk Festival": 54,
    "description": "Unidentified Seminole woman cooking food at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 123074,
    "file": "FS891092",
    "Florida Folk Festival": 54,
    "description": "Unidentified Seminole woman cooking food at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 123078,
    "file": "FS891130",
    "Florida Folk Festival": 53,
    "description": "Pencils carved by Bill Cooey on display at the 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 123201,
    "file": "FS89588",
    "Florida Folk Festival": 74,
    "description": "Fruit or vegetable carved item by Pam Maneeratana on display at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 123202,
    "file": "FS89589",
    "Florida Folk Festival": 76,
    "description": "Fruit and vegetable carved items by Pam Maneeratana on display at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 123226,
    "file": "FS89751",
    "Florida Folk Festival": 72,
    "description": "Miniature wood carved items made by Harold Dunn on display at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 123235,
    "file": "FS89799",
    "Florida Folk Festival": 41,
    "description": "George Altman making a whip at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 123236,
    "file": "FS89804",
    "Florida Folk Festival": 40,
    "description": "Lavon Gawn roasting mullet at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 123245,
    "file": "FS89957",
    "Florida Folk Festival": 59,
    "description": "Bill Cooey making an Anglo-Creek wood carving at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 123246,
    "file": "FS89962",
    "Florida Folk Festival": 43,
    "description": "Pine needle basket on display at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 123247,
    "file": "FS89967",
    "Florida Folk Festival": 58,
    "description": "Martin Johnson competing in a fiddle contest at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 123249,
    "file": "FS89980",
    "Florida Folk Festival": 57,
    "description": "Jesus Rodriguez playing the Venezuelan harp at the 1988 Florida Folk Festival - White Springs, Florida",
    "year": 1988
  },
  {
    "id": 123554,
    "file": "FS921027",
    "Florida Folk Festival": 37,
    "description": "Willie James performing at the 1992 Florida Folk Festival - White Springs, Florida",
    "year": 1992
  },
  {
    "id": 123630,
    "file": "FS92495",
    "Florida Folk Festival": 45,
    "description": "Peyton Brothers band performing at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 123633,
    "file": "FS92502",
    "Florida Folk Festival": 53,
    "description": "John Cephas and Phil Wiggins performing at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 123645,
    "file": "FS92571",
    "Florida Folk Festival": 69,
    "description": "William Ramoutar holding up a copy of the Book of Kells at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 123654,
    "file": "FS92679",
    "Florida Folk Festival": 35,
    "description": "Boy modeling his hair at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 123655,
    "file": "FS92684",
    "Florida Folk Festival": 35,
    "description": "Boy modeling his hair at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 123657,
    "file": "FS92698",
    "Florida Folk Festival": 27,
    "description": "Gigi Lilavois at the 1991 Florida Folk Festival displaying Haitian paintings - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 123664,
    "file": "FS92749",
    "Florida Folk Festival": 54,
    "description": "Red Tam Tony McQueen playing blues music at the 1991 Florida Folk Festival - White Springs, Florida",
    "year": 1991
  },
  {
    "id": 123694,
    "file": "FS92967",
    "Florida Folk Festival": 67,
    "description": "Konbo Guinyn band showing child how to play drums during the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 123696,
    "file": "FS92970",
    "Florida Folk Festival": 67,
    "description": "Konbo Guinyn band showing child how to play drums during the 1990 Florida Folk Festival - White Springs, Florida",
    "year": 1990
  },
  {
    "id": 123744,
    "file": "FS93294",
    "Florida Folk Festival": 44,
    "description": "Neil Brooks making a cypress chair at 1987 Florida Folk Festival - White Springs, Florida",
    "year": 1987
  },
  {
    "id": 319032,
    "file": "FS96003",
    "Florida Folk Festival": 52,
    "description": "Doc Watson at the Old Marble Stage during the 1996 Florida Folk Festival in White Springs.",
    "year": 1996
  },
  {
    "id": 319059,
    "file": "FS96005",
    "Florida Folk Festival": 68,
    "description": "Alphonso Jennings, white oak basket maker from Lamont, at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319058,
    "file": "FS96006",
    "Florida Folk Festival": 39,
    "description": "Street crier Tommy Walton at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319057,
    "file": "FS96007",
    "Florida Folk Festival": 39,
    "description": "Street crier Tommy Walton at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319056,
    "file": "FS96008",
    "Florida Folk Festival": 73,
    "description": "Margaret Garrison, from Jacksonville, making a sweetgrass basket at the Florida Folk Festival in White Springs.",
    "year": "1900 (circa)"
  },
  {
    "id": 319055,
    "file": "FS96009",
    "Florida Folk Festival": 71,
    "description": "Margaret Garrison, from Jacksonville, with her sweetgrass coil at the Florida Folk Festival in White Springs.",
    "year": "1900 (circa)"
  },
  {
    "id": 319029,
    "file": "FS96012",
    "Florida Folk Festival": 63,
    "description": "Jose Silva and apprentice Marvin Silva performing at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319047,
    "file": "FS96013",
    "Florida Folk Festival": 64,
    "description": "Cortez Grand Old Opry playing the amphitheater during the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319028,
    "file": "FS96014",
    "Florida Folk Festival": 69,
    "description": "Jose Silva performing the Nicaraguan \"Toro Huaco\" dance at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319052,
    "file": "FS96017",
    "Florida Folk Festival": 58,
    "description": "Ghanaian-American Abenaa Owusu braiding hair at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319051,
    "file": "FS96018",
    "Florida Folk Festival": 58,
    "description": "Ghanaian-American Abenaa Owusu braiding hair at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319050,
    "file": "FS96019",
    "Florida Folk Festival": 71,
    "description": "Bluegrass band Tru Blue Grass, of Orange Park, performing at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319049,
    "file": "FS96020",
    "Florida Folk Festival": 73,
    "description": "African American gospel group \"Voices of Praise\" performing at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319048,
    "file": "FS96022",
    "Florida Folk Festival": 60,
    "description": "Cortez Grand Old Opry playing the amphitheater at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319046,
    "file": "FS96023",
    "Florida Folk Festival": 71,
    "description": "Yarko Antonevych, of Miami, playing the Ukrainian bandura at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319045,
    "file": "FS96024",
    "Florida Folk Festival": 71,
    "description": "Yarko Antonevych, of Miami, playing the Ukrainian bandura at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319044,
    "file": "FS96025",
    "Florida Folk Festival": 81,
    "description": "Greg Gaughan, apprentice to saddlemaker Mike Wilder of Kenansville, at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319043,
    "file": "FS96026",
    "Florida Folk Festival": 59,
    "description": "Louellen Davis, of the Versiteers, performing at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319042,
    "file": "FS96027",
    "Florida Folk Festival": 39,
    "description": "The Versiteers performing at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319041,
    "file": "FS96028",
    "Florida Folk Festival": 58,
    "description": "Myrtle Barton, of the Versiteers, performing at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319040,
    "file": "FS96029",
    "Florida Folk Festival": 60,
    "description": "Cortez Grand Old Opry playing the amphitheater at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319036,
    "file": "FS96032",
    "Florida Folk Festival": 68,
    "description": "Alphonso Jennings, white oak basket maker from Lamont, at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319035,
    "file": "FS96033",
    "Florida Folk Festival": 61,
    "description": "Ukrainian bandura belonging to Yarko Antonevych at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319026,
    "file": "FS96036",
    "Florida Folk Festival": 84,
    "description": "Seminole Betty Mae Jumper telling folk stories at the amphitheater during the 1975 Florida Folk Festival.",
    "year": 1975
  },
  {
    "id": 319024,
    "file": "FS96037",
    "Florida Folk Festival": 53,
    "description": "John Cephas and Phil Wiggins performing at the 1991 Florida Folk Festival in White Springs.",
    "year": 1991
  },
  {
    "id": 319022,
    "file": "FS96038",
    "Florida Folk Festival": 78,
    "description": "Margaret Garrison, from Jacksonville, making a sweetgrass basket at the 1986 Florida Folk Festival in White Springs.",
    "year": 1986
  },
  {
    "id": 319019,
    "file": "FS96041",
    "Florida Folk Festival": 35,
    "description": "Nancy Morgan quilting at the 1992 Florida Folk Festival in White Springs.",
    "year": 1992
  },
  {
    "id": 319017,
    "file": "FS96043",
    "Florida Folk Festival": 79,
    "description": "Tuan Nguyen, of Tampa, working on Vietnamese Cualong woodcarvings at the 1986 Florida Folk Festival in White Springs.",
    "year": 1986
  },
  {
    "id": 319015,
    "file": "FS96047",
    "Florida Folk Festival": 75,
    "description": "Woodturner Dave Barringer, of Apopka, at the Craft Sales Area of the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319014,
    "file": "FS96048",
    "Florida Folk Festival": 32,
    "description": "Toro Huaco dancers at the 1995 Florida Folk Festival in White Springs.",
    "year": 1995
  },
  {
    "id": 319013,
    "file": "FS96049",
    "Florida Folk Festival": 83,
    "description": "Youth in traditional Seminole garb assembled at the Seminole Camp during the 1991 Florida Folk Festival.",
    "year": 1991
  },
  {
    "id": 319012,
    "file": "FS96050",
    "Florida Folk Festival": 83,
    "description": "Youth in traditional Seminole garb assembled at the Seminole Camp during the 1991 Florida Folk Festival.",
    "year": 1991
  },
  {
    "id": 319010,
    "file": "FS96051",
    "Florida Folk Festival": 52,
    "description": "Irish Step dancers, from Jacksonville, at the 1991 Florida Folk Festival in White Springs.",
    "year": 1991
  },
  {
    "id": 319007,
    "file": "FS96055",
    "Florida Folk Festival": 65,
    "description": "E.A. \"Frog\" Smith, tall tale teller from Ft. Myers, at the 1977 Florida Folk Festival.",
    "year": 1977
  },
  {
    "id": 319006,
    "file": "FS96056",
    "Florida Folk Festival": 60,
    "description": "Emelia Fernandez and her comparsa dance troupe at the 1991 Florida Folk Festival in White Springs.",
    "year": 1991
  },
  {
    "id": 319002,
    "file": "FS96060",
    "Florida Folk Festival": 55,
    "description": "Sinu Abraham performing East Indian dance at the 1991 Florida Folk Festival in White Springs.",
    "year": 1991
  },
  {
    "id": 319001,
    "file": "FS96061",
    "Florida Folk Festival": 79,
    "description": "Sisy Abraham performing East Indian dance with Nila Radhakrishnan at the 1991 Florida Folk Festival in White Springs.",
    "year": 1991
  },
  {
    "id": 319065,
    "file": "FS96062",
    "Florida Folk Festival": 50,
    "description": "Ardoin Family Zydeco Band performing at the 1998 Florida Folk Festival in White Springs.",
    "year": 1998
  },
  {
    "id": 319067,
    "file": "FS96068",
    "Florida Folk Festival": 57,
    "description": "Kazuko Law performing Japanese tea ceremony at the 1998 Florida Folk Festival in White Springs.",
    "year": 1998
  },
  {
    "id": 319068,
    "file": "FS96069",
    "Florida Folk Festival": 61,
    "description": "Kazuko Law performing Japanese tea ceremony during the 1998 Florida Folk Festival in White Springs.",
    "year": 1998
  },
  {
    "id": 319080,
    "file": "FS96071",
    "Florida Folk Festival": 76,
    "description": "Students of Geeta Raaj Karkera performing bharata natyam dance at the 1998 Florida Folk Festival.",
    "year": 1998
  },
  {
    "id": 319081,
    "file": "FS96073",
    "Florida Folk Festival": 75,
    "description": "Mieko Kubota performing Ikebana, Japanese flower arrangement, at the 1998 Florida Folk Festival.",
    "year": 1998
  },
  {
    "id": 319092,
    "file": "FS96077",
    "Florida Folk Festival": 79,
    "description": "Jacksonville Chinese Cultural Association dance troupe performing at the 1998 Florida Folk Festival.",
    "year": 1998
  },
  {
    "id": 319091,
    "file": "FS96078",
    "Florida Folk Festival": 79,
    "description": "Jacksonville Chinese Cultural Association dance troupe performing at the 1998 Florida Folk Festival.",
    "year": 1998
  },
  {
    "id": 319085,
    "file": "FS96084",
    "Florida Folk Festival": 72,
    "description": "Fijian cultural advocate and storyteller Lilly Koroitamudu at the 1998 Florida Folk Festival.",
    "year": 1998
  },
  {
    "id": 319084,
    "file": "FS96085",
    "Florida Folk Festival": 72,
    "description": "Geeta Raaj Karkera with her bharata natyam student dancers at the 1998 Florida Folk Festival.",
    "year": 1998
  },
  {
    "id": 319074,
    "file": "FS96093",
    "Florida Folk Festival": 62,
    "description": "Hawaiian slack key guitarist Roy Pang performing at the 1998 Florida Folk Festival.",
    "year": 1998
  },
  {
    "id": 319073,
    "file": "FS96094",
    "Florida Folk Festival": 62,
    "description": "Hawaiian slack key guitarist Roy Pang performing at the 1998 Florida Folk Festival.",
    "year": 1998
  },
  {
    "id": 319071,
    "file": "FS96096",
    "Florida Folk Festival": 71,
    "description": "Bluegrass musicians Jesse and James McReynolds performing at the 1998 Florida Folk Festival.",
    "year": 1998
  },
  {
    "id": 319070,
    "file": "FS96097",
    "Florida Folk Festival": 73,
    "description": "Yi Chang Poon, Chinese calligrapher and painter from Miami, at the 1998 Florida Folk Festival.",
    "year": 1998
  },
  {
    "id": 319069,
    "file": "FS96098",
    "Florida Folk Festival": 61,
    "description": "Kazuko Law demonstrating origami techniques during the 1998 Florida Folk Festival in White Springs.",
    "year": 1998
  },
  {
    "id": 319066,
    "file": "FS96099",
    "Florida Folk Festival": 73,
    "description": "Dexter Ardoin performing with the Ardoin Family Zydeco Band at the 1998 Florida Folk Festival in White Springs.",
    "year": 1998
  },
  {
    "id": 319358,
    "file": "FS96100",
    "Florida Folk Festival": 60,
    "description": "Bluegrass musician James McReynolds performing at the 1998 Florida Folk Festival.",
    "year": 1998
  },
  {
    "id": 319352,
    "file": "FS96103",
    "Florida Folk Festival": 79,
    "description": "Hung-Wah Poon, of Miami, displaying his hand-carved Chinese chops at the 1998 Florida Folk Festival.",
    "year": 1998
  },
  {
    "id": 124236,
    "file": "FT11644",
    "Florida Folk Festival": 36,
    "description": "Polish \"Mazur\" dancers at the 1960 Florida Folk Festival- White Springs, Florida",
    "year": 1960
  },
  {
    "id": 124241,
    "file": "FT13739",
    "Florida Folk Festival": 36,
    "description": "Eueline Jordan using a loom at the Florida Folk Festival- White Springs, Florida",
    "year": "1970 (circa)"
  },
  {
    "id": 124242,
    "file": "FT13746",
    "Florida Folk Festival": 32,
    "description": "Dancers performing at the 1962 Florida Folk Festival- White Springs, Florida",
    "year": 1962
  },
  {
    "id": 124260,
    "file": "FT6403",
    "Florida Folk Festival": 41,
    "description": "Creek Indian painter Fred Beaver at the Florida Folk Festival- White Springs, Florida.",
    "year": 1959
  },
  {
    "id": 124262,
    "file": "FT8579",
    "Florida Folk Festival": 43,
    "description": "Philippine Bamboo Stick dance at the 1957 Florida Folk Festival- White Springs, Florida",
    "year": 1957
  },
  {
    "id": 124266,
    "file": "FT9555",
    "Florida Folk Festival": 26,
    "description": "Billy Bowlegs III at the Florida Folk Festival- White Springs, Florida",
    "year": "1965 (circa)"
  },
  {
    "id": 124267,
    "file": "FT9557",
    "Florida Folk Festival": 26,
    "description": "Billy Bowlegs III at the Florida Folk Festival- White Springs, Florida",
    "year": "1965 (circa)"
  },
  {
    "id": 124268,
    "file": "FT9559",
    "Florida Folk Festival": 41,
    "description": "Creek Indian painter Fred Beaver at the Florida Folk Festival- White Springs, Florida.",
    "year": 1959
  },
  {
    "id": 124273,
    "file": "FT9598",
    "Florida Folk Festival": 70,
    "description": "Creek Indian painter Fred Beaver singing and shaking a rattle at the Florida Folk Festival- White Springs, Florida.",
    "year": "1965 (circa)"
  }
]

