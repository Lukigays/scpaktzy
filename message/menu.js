const fs = require("fs")
const chalk = require("chalk")

exports.menunya = (m) => {
return `
β­ββ(         Lukyy πͺπΉπ¨πΊπ― ππππππππ        )
β- Sc Private ε
βπ­ Name : ${m.pushName}
ββ¬β­β¬β­β¬β­β¬β­β¬β­
βπ­ Creator : Lukyy Pak - Tzy
βπ­ Owner : LUKYY πͺπΉπ¨πΊπ― ππππππππ
βπ­ Owner Number : 08998020994
βπ­ Prefix : MULTI
ββ¬β­γ LUKYY πππππππποΈ γβ­β¬
β
β Yt : https://youtube.com/@lukiWell
β Yt : https://youtube.com/@lukiWell
β Tik Tok : https://tiktok.com/@lukyyketche
β
ββββββββββββββββββββ¬£
ββββββ± *γ JOIN GROUP γ* βββββ¬£
βββ±
ββΏ» *Group V!!!γ½οΈ : http://bit.ly/3jUk5Li
βββ±
ββββββββββββββββββββ¬£
ββββββββββββββββββββ¬£
βββ±
ββ- Sc Private ε
βββ±
ββββββββββββββββββββ¬£

ββββ± *γ OWNER MENU γ* βββ¬£
βββ±
ββΏ» Join
ββΏ» Leave
ββΏ» Creategc
ββΏ» Bc
ββΏ» Bcgc
ββΏ» Bcpc
ββΏ» Getcase
ββΏ» Ban
ββΏ» Unban
ββΏ» Block
ββΏ» Unblock
ββΏ» Setppbot
ββΏ» Setnomerowner
ββΏ» Setnamaowner
ββΏ» Setcopyright
ββΏ» Setmenu
ββΏ» Setreply
ββΏ» Setwelcome
ββΏ» Auto
ββΏ» Autosticker
ββΏ» Autorespon
ββΏ» Autoread
ββΏ» Autovn
ββΏ» Anticall
ββΏ» Mode
ββΏ» Getfile
ββΏ» Getfolder
ββΏ» Getsesi
ββΏ» Chat
βββ±
ββββββββββββββββββββ¬£

βββββ± *γ VIRUS & BUG γ* ββββ¬£
βββ±
ββΏ» Bugtag [ Bug @ ]
ββΏ» Bugreacpc [ Nomor Target ]
ββΏ» Vncrash [ Nomor Target ]
ββΏ» Bugreacgc [Id Group]
ββΏ» Bugsticker [ PC / GC ]
ββΏ» Catalogc [ Crash Home ]
ββΏ» Catalog+ [ Crash Home + IDR ]
ββΏ» Catalog [ IDR ]
ββΏ» Catalog2 [ PC  / GC ]
ββΏ» Bugbutton [ Jumlah ]
ββΏ» Virkon [ 86 CTT ]
ββΏ» Fotoc [ Nomor Target ]
ββΏ» Pdfcrash [ Pc / Gc ]
ββΏ» Buglist [ New Md ]
ββΏ» Virvid [ Pc / Gc ]
ββΏ» Senbug [ Pilihan ]
ββΏ» Jadibug1 [ Reply ]
ββΏ» Jadibug2 [ Reply ]
ββΏ» Jadibug3 [ Reply ]
ββΏ» Jadibug4 [ Reply ]
ββΏ» Jadibug5 [ Reply ]
ββΏ» Permisi [ Bug List ]
ββΏ» Bugstik [ Jumlah ]
ββΏ» Bughen [ Nomor Target ]
ββΏ» Virdoc [ Document ]
ββΏ» Inibug [ Jenis Tagal ]
ββΏ» Catalog3 [ Pc / Gc ]
ββΏ» Troli [ Troli Cart ]
ββΏ» Gascrash [ Pc ]
ββΏ» Bug1 [ Bug Jenis Audio ]
ββΏ» Bug2 [ Bug Jenis Foto ]
ββΏ» Bug3 [ Bug Jenis Doc ]
ββΏ» Bug4 [ Bug Jenis Grup ]
ββΏ» Bug5 [ Bug Jenis Lokas ]
ββΏ» Bug6 [ Bug Jenis Troli ]
ββΏ» Bug7 [ Bug Jenis Ctt ]
ββΏ» Listcrash [ Pc ]
ββΏ» Cart [ Pc / Gc ]
ββΏ» Cttcrash [ Pc ]
ββΏ» Dokcrash [ Pc / Gc ]
ββΏ» Audiocrash [ Pc / Gc ]
ββΏ» Oncrash [ Vitur Grup ]
ββΏ» Cttall [ Pc ]
ββΏ» Virkonc [ Ctt ]
ββΏ» Pdfspam [ Jumlah ]
ββΏ» Bugpdf [ Pdf ]
ββΏ» Spam [ Jumlah ]
ββΏ» Bugpc [ Buginvite ]
ββΏ» Bannum [ Report ]
ββΏ» Unbannum [ Support ]
ββΏ» Pccrash [ Pc ]
ββΏ» Lokas [ Live Lokasi ]
ββΏ» Livelok [ Pc / Gc ]
ββΏ» Tzycrashpc [ Nomor Target ]
ββΏ» Image [ Pc / Gc ]
ββΏ» Tzycrashgc [ Id Gc ]
ββΏ» Cttbusin [ Pc ]
ββΏ» Poll [ Pol+Txt Kosong ]
ββΏ» Votpol [ Vote Crash ]
ββΏ» Polvote [ Teks ]
ββΏ» Troli2 [ CartV2 ]
ββΏ» Paym [ Virtex Pay ]
ββΏ» Paymv [ V Pay Thum Img ]
ββΏ» Stpc [ Pc ]
ββΏ» Stgc [ Gc ]
ββΏ» Doc [ Virdoc New V1 ]
ββΏ» Docu [ Virdoc New V2 ]
ββΏ» Virduc [ Virdoc New V3 ]
ββΏ» Duc [ Virdoc New V4 ]
ββΏ» Spamv [ Jumlah ]
ββΏ» Afk [ Reaction Emoji ]
ββΏ» Vaudio [ Virus Media ]
ββΏ» Pengsui [ Text Kosong ]
ββΏ» Vimgsw [ Reply Foto ]
ββΏ» Vionce [ Virus Once Img ]
ββΏ» Vvonce [ Reply Video ]
ββΏ» Vvidsw [ Virvid Sw ]
ββΏ» Troli4 [ Cart Crash ]
ββΏ» Vtag [ Tag Di Gc ]
ββΏ» Bugvid [ View Vid Crash ]
ββΏ» Vbuy [ V Click Bayar ]
ββΏ» Buglink [ Virus Link ]
ββΏ» Vweb [ Virus Website ]
ββΏ» Jadicatalogc [ Reply Img+Txt ]
ββΏ» Jadicatalog+ [ Reply Img+Txt ]
ββΏ» Vgt [ V Web ]
ββΏ» Vgs [ V Web ]
ββΏ» Jadicatalog [ Reply Foto ]
ββΏ» Jadibugsw [ Reply Img+Txt ]
ββΏ» π₯ [ Bug Bew ]
ββΏ» Bugytta [ Button 6 ]
ββΏ» Buttonimg [ Img Bug Button ]
ββΏ» Bugquick [ Button 9 ]
ββΏ» β οΈ [ Dangerr ]
ββΏ» Ftroli [ Cart ]
ββΏ» Santed [ Brutal Send ]
ββΏ» Santedgc [ Masukan Link ]
ββΏ» Sendbug [ V1 ]
ββΏ» Sendbugv [ V2 ]
ββΏ» Sendbuggc [ V3 ]
ββΏ» Sendbuggcv [ V4 ]
ββΏ» Bugdelete [ Ghost ]
ββΏ» Kudeta [ Kudet Grup ]
ββΏ» Autobug [ On/Off ]
ββΏ» Bug [ Jids ]
ββΏ» Culikall [ Cilik All Mem ]
ββΏ» Culik [ Tag Mem ]
ββΏ» Hacked [ Bot Admin ]
ββΏ» Retasgc [ Option ]
ββΏ» Kenon [ FORM WA ]
ββΏ» Verif@ [ Masukan Nomor ]
ββΏ» > Aud
ββΏ» > Aud1
ββΏ» > Buttontzy
ββΏ» > Buttonvirus
ββΏ» > Cttl
ββΏ» > Ker
ββΏ» > Mata
ββΏ» > Mata1
ββΏ» > Notif1
ββΏ» > Notif2
ββΏ» > Notif3
ββΏ» > Notif4
ββΏ» > Pen
ββΏ» > Place
ββΏ» > Tizi
ββΏ» > Url
ββΏ» > Weg
ββΏ» > Pvz3
ββΏ» > Pvm3
ββΏ» > Funer
ββΏ» > Pv3m
ββΏ» > Lugia
ββΏ» > Malvadinha
ββΏ» > Explosion
ββΏ» > Parando
ββΏ» > Killed
ββΏ» > Cova
ββΏ» > Sumiu
ββΏ» > Destroi
ββΏ» > Voids
ββΏ» > Explosionios
ββΏ» > Vimg
ββΏ» > Vimgesw
ββΏ» > Konf
ββΏ» > Vnolim
ββΏ» Viospc+ [ Private Chat ]
ββΏ» Viospc [ Private Chat ]
ββΏ» Vandropc [ Private Chat ]
ββΏ» Viosgc+ [ Group Chat ]
ββΏ» Viosgc [ Group Chat ]
ββΏ» Vandrogc [ Group Chat ]
βββ±
ββββββββββββββββββββ¬£

ββββ± *γ GROUP MENU γ* βββ¬£
βββ±
ββΏ» Antilink
ββΏ» Antilinkgc
ββΏ» Antilinkyt
ββΏ» Antilinkfb
ββΏ» Antilinkig
ββΏ» Antilinktele
ββΏ» Antilinkwa
ββΏ» Antilinktiktok
ββΏ» Antilinktwitter
ββΏ» Antivirtex
ββΏ» Antiasing
ββΏ» Antitag
ββΏ» Antidelete
ββΏ» Antiviewonce
ββΏ» Antitoxic
ββΏ» Antisange
ββΏ» Antinsfw
ββΏ» Autorespongc
ββΏ» Autoreact
ββΏ» Mute
ββΏ» Welcome
ββΏ» Linkgc
ββΏ» Setppgroup
ββΏ» Setnamegc
ββΏ» Setdesc
ββΏ» Group
ββΏ» Revoke
ββΏ» Hidetag
ββΏ» Tagall
ββΏ» Add
ββΏ» Kick
ββΏ» Promote
ββΏ» Demote
ββΏ» Opentime
ββΏ» Closetime
ββΏ» Disappearing
ββΏ» Editinfo
ββΏ» Inspect
ββΏ» Vote [Text]
ββΏ» Devote
ββΏ» Upvote
ββΏ» Cekvote
ββΏ» Hapusvote
βββ±
ββββββββββββββββββββ¬£

ββββ± *γ TOLS MENU γ* βββ¬£
βββ±
ββΏ» Menu
ββΏ» Owner
ββΏ» Kalkulator
ββΏ» Getpp
ββΏ» Getname
ββΏ» Wame
ββΏ» Del
ββΏ» Delsampah
ββΏ» React
ββΏ» Runtime
ββΏ» Speed
ββΏ» Ping
ββΏ» Listpc
ββΏ» Listgc
ββΏ» Cariteman
βββ±
ββββββββββββββββββββ¬£

ββββ± *γ STORAGE MENU γ* βββ¬£
βββ±
ββΏ» Addstick
ββΏ» Addvn
ββΏ» Addowner
ββΏ» Delstick
ββΏ» Delvn
ββΏ» Delowner
ββΏ» Liststick
ββΏ» Listvn
ββΏ» Listowner
ββΏ» Listban
ββΏ» Listblock
ββΏ» Clearallstick
ββΏ» Clearallvn
ββΏ» Clearallowner
ββΏ» Clearallban
ββΏ» Clearalldb
βββ±
ββββββββββββββββββββ¬£

ββββ± *γ JADIBOT MENU γ* βββ¬£
βββ±
ββΏ» Jadibot
ββΏ» Stopjadibot
ββΏ» Deljadibot
ββΏ» Clearalljadibot
ββΏ» Listjadibot
βββ±
ββββββββββββββββββββ¬£

ββββ± *γ FUNN MENU γ* βββ¬£
βββ±
ββΏ» Bagaimanakah
ββΏ» Kapankah
ββΏ» Apakah
ββΏ» Bisakah
ββΏ» Rate
ββΏ» Wangy
ββΏ» Gantengcek
ββΏ» Cekganteng
ββΏ» Cantikcek
ββΏ» Cekcantik
ββΏ» Sangecek
ββΏ» Ceksange
ββΏ» Gaycek
ββΏ» Cekgay
ββΏ» Lesbicek
ββΏ» Styletext
ββΏ» Halah
ββΏ» Hilih
ββΏ» Huluh
ββΏ» Heleh
ββΏ» Holoh
ββΏ» Jadian
ββΏ» Jodohku
ββΏ» Delttt
ββΏ» Family100
ββΏ» Tebak [Option]
ββΏ» Math [Mode]
ββΏ» Suitpvp [@Tag]
βββ±
ββββββββββββββββββββ¬£

ββββ± *γ PRIMBON MENU γ* βββ¬£
βββ±
ββΏ» Nomorhoki
ββΏ» Artimimpi
ββΏ» Artinama
ββΏ» Ramaljodoh
ββΏ» Ramalcinta
ββΏ» Ramaljodohbali
ββΏ» Suamiistri
ββΏ» Cocoknama
ββΏ» Pasangan
ββΏ» Jadiannikah
ββΏ» Sifatusaha
ββΏ» Rezeki
ββΏ» Pekerjaan
ββΏ» Nasib
ββΏ» Penyakit
ββΏ» Tarot
ββΏ» Fengshui
ββΏ» Haribaik
ββΏ» Harisangar
ββΏ» Harisial
ββΏ» Nagahari
ββΏ» Arahrezeki
ββΏ» Peruntungan
ββΏ» Weton
ββΏ» Karakter
ββΏ» Keberuntungan
ββΏ» Masasubur
ββΏ» Memancing
ββΏ» Zodiak
ββΏ» Shio
βββ±
ββββββββββββββββββββ¬£
 
ββββ± *γ ISLAMIYAH γ* βββ¬£
βββ±
ββΏ» Iqra
ββΏ» Hadist
ββΏ» Alquran
ββΏ» Juzamma
ββΏ» Tafsirsurah
βββ±
ββββββββββββββββββββ¬£
 
ββββ± *γ BERITA NEWS γ* βββ¬£
βββ±
ββΏ» Merdeka-News
ββΏ» Kontan-News
ββΏ» Cnbc-News
ββΏ» Tribun-News 
ββΏ» Indozone-News 
ββΏ» Kompas-News 
ββΏ» Detik-News 
ββΏ» Daily-News
ββΏ» Inews-News 
ββΏ» Okezone-News
ββΏ» Sindo-News
ββΏ» Tempo-News
ββΏ» Antara-News
ββΏ» Cnn-News 
ββΏ» Fajar-News 
βββ±
ββββββββββββββββββββ¬£
 
ββββ± *γ SCRAPER IMAGE γ* βββ¬£
βββ±
ββΏ» Anime
ββΏ» Coffe
ββΏ» Quotesanime
ββΏ» Couple
ββΏ» Umma
ββΏ» Bully
ββΏ» Waifu
ββΏ» Cuddle
ββΏ» Neko
ββΏ» Cry
ββΏ» Kiss
ββΏ» Hug
ββΏ» Lick
ββΏ» Awoo
ββΏ» Yeet
ββΏ» Bite
ββΏ» Pat
ββΏ» Kill
ββΏ» Nom
ββΏ» Poke
ββΏ» Wink
ββΏ» Bonk
ββΏ» Glomp
ββΏ» Smug
ββΏ» Blush
ββΏ» Wave
ββΏ» Smile
ββΏ» Highfive
ββΏ» Cringe
ββΏ» Dance
ββΏ» Happy
ββΏ» Handhold
ββΏ» Darkjoke
ββΏ» Meme
ββΏ» Meme2
βββ±
ββββββββββββββββββββ¬£
 
ββββ± *γ SCRAPER IMAGETEXT γ* βββ¬£
βββ±
ββΏ» Candy
ββΏ» Christmas
ββΏ» 3Dchristmas
ββΏ» Sparklechristmas
ββΏ» Deepsea
ββΏ» Scifi
ββΏ» 3Dbox
ββΏ» Drapwater
ββΏ» Lion2
ββΏ» Papercut
ββΏ» 3dstone
ββΏ» Thunder
ββΏ» Graf
ββΏ» Glitch3
ββΏ» Transformer
ββΏ» Herryp
ββΏ» Neondevil
ββΏ» 3dstone
ββΏ» Rainbow
ββΏ» Waterpipe
ββΏ» Spooky
ββΏ» Pencil
ββΏ» Circuit
ββΏ» Discovery
ββΏ» Metalic
ββΏ» Fiction
ββΏ» Demon
ββΏ» Berry
ββΏ» Magma
ββΏ» 3Dstone
ββΏ» Neonlight
ββΏ» Glitch
ββΏ» Harrypotter
ββΏ» Brokenglass
ββΏ» Papercut
ββΏ» Watercolor
ββΏ» Multicolor
ββΏ» Underwater
ββΏ» Graffitibike
ββΏ» Snow
ββΏ» Cloud
ββΏ» Honey
ββΏ» Ice
ββΏ» Fruitjuice
ββΏ» Biscuit
ββΏ» Wood
ββΏ» Chocolate
ββΏ» Strawberry
ββΏ» Matrix
ββΏ» Blood
ββΏ» Dropwater
ββΏ» Toxic
ββΏ» Lava
ββΏ» Rock
ββΏ» Bloodglas
ββΏ» Hallowen
ββΏ» Darkgold
ββΏ» Joker
ββΏ» Wicker
ββΏ» Firework
ββΏ» Skeleton
ββΏ» Blackpink
ββΏ» Sand
ββΏ» Glue
ββΏ» 1917
ββΏ» Leaves
βββ±
ββββββββββββββββββββ¬£
 
ββββ± *γ VOICE CHANGER γ* βββ¬£
βββ±
ββΏ» Bass
ββΏ» Blown
ββΏ» Deep
ββΏ» Earrape
ββΏ» Fast
ββΏ» Fat
ββΏ» Nightcore
ββΏ» Reverse
ββΏ» Robot
ββΏ» Slow
ββΏ» Tupai
βββ±
ββββββββββββββββββββ¬£
 
ββββ± *γ ASUPAN MATA γ* βββ¬£
βββ±
ββΏ» Asupan
ββΏ» Asupangheayubi
ββΏ» Asupanrikagusriani
ββΏ» Asupanukhty
ββΏ» Asupanbocil
ββΏ» Asupansantuy
ββΏ» Hijaber
ββΏ» Cecanindo
ββΏ» Cecanchina
ββΏ» Cecanhijaber
ββΏ» Cecanmalaysia
ββΏ» Cecanthai
ββΏ» Cecanvietnam
ββΏ» Cecankorea
ββΏ» Cecanjepan
ββΏ» Bokpig
ββΏ» Cecan
βββ±
ββββββββββββββββββββ¬£
 
ββββ± *γ SEARCH MENU γ* βββ¬£
βββ±
ββΏ» Play [Query]
ββΏ» Yts [Query]
ββΏ» Google [Query]
ββΏ» Gimage [Query]
ββΏ» Pinterest [Query]
ββΏ» Wallpaper [Query]
ββΏ» Wikimedia [Query]
ββΏ» Ytsearch [Query]
ββΏ» Ringtone [Query]
ββΏ» Searchgroups [Query]
βββ±
ββββββββββββββββββββ¬£

ββββ± *γ SCRAP CONVERT γ* βββ¬£
βββ±
ββΏ» Attp
ββΏ» Ttp
ββΏ» Toimage
ββΏ» Sticker
ββΏ» Emojimix
ββΏ» Emojimix2
ββΏ» Tovideo
ββΏ» Togif
ββΏ» Tourl
ββΏ» Tovn
ββΏ» Toonce
ββΏ» Tomp3
ββΏ» Toaudio
ββΏ» Ebinary
ββΏ» Dbinary
ββΏ» Styletext
ββΏ» Smeme
ββΏ» Ssweb [Url]
βββ±
ββββββββββββββββββββ¬£
 
ββββ± *γ CMD MENU γ* βββ¬£
βββ±
ββΏ» Setcmd
ββΏ» Listcmd
ββΏ» Delcmd
ββΏ» Lockcmd
ββΏ» Addmsg
ββΏ» Listmsg
ββΏ» Getmsg
ββΏ» Delmsg
βββ±
ββββββββββββββββββββ¬£
 
ββββ± *γ MENU ANONYMOUS γ* βββ¬£
βββ±
ββΏ» Anonymous
ββΏ» Start
ββΏ» Next
ββΏ» Keluar
βββ±
ββββββββββββββββββββ¬£
 
ββββ± *γ DOWNLOAD MENU γ* βββ¬£
βββ±
ββΏ» Pinterestdl [Url]
ββΏ» Ytmp3 [Url]
ββΏ» Ytmp4 [Url]
ββΏ» Tiktok [Url]
ββΏ» Tiktokmp3 [Url]
ββΏ» Mediafire [Url]
βββ±
ββββββββββββββββββββ¬£
 
ββββ± *γ RANDOM SOUND γ* βββ¬£
βββ±
ββΏ» Sound1
ββΏ» Sound2
ββΏ» Sound3
ββΏ» Sound4
ββΏ» Sound5
ββΏ» Sound6
ββΏ» Sound7
ββΏ» Sound8
ββΏ» Sound9
ββΏ» Sound10
ββΏ» Sound11
ββΏ» Sound12
ββΏ» Sound13
ββΏ» Sound14
ββΏ» Sound15
ββΏ» Sound16
ββΏ» Sound17
ββΏ» Sound18
ββΏ» Sound19
ββΏ» Sound20
ββΏ» Sound21
ββΏ» Sound22
ββΏ» Sound23
ββΏ» Sound24
ββΏ» Sound25
ββΏ» Sound26
ββΏ» Sound27
ββΏ» Sound28
ββΏ» Sound29
ββΏ» Sound30
ββΏ» Sound31
ββΏ» Sound32
ββΏ» Sound33
ββΏ» Sound34
ββΏ» Sound35
ββΏ» Sound36
ββΏ» Sound37
ββΏ» Sound38
ββΏ» Sound39
ββΏ» Sound40
ββΏ» Sound41
ββΏ» Sound42
ββΏ» Sound43
ββΏ» Sound44
ββΏ» Sound45
ββΏ» Sound46
ββΏ» Sound47
ββΏ» Sound48
ββΏ» Sound49
ββΏ» Sound50
ββΏ» Sound51
ββΏ» Sound52
ββΏ» Sound53
ββΏ» Sound54
ββΏ» Sound55
ββΏ» Sound56
ββΏ» Sound57
ββΏ» Sound58
ββΏ» Sound59
ββΏ» Sound60
ββΏ» Sound61
ββΏ» Sound62
ββΏ» Sound63
ββΏ» Sound64
ββΏ» Sound65
ββΏ» Sound66
ββΏ» Sound67
ββΏ» Sound68
ββΏ» Sound69
ββΏ» Sound70
ββΏ» Sound71
ββΏ» Sound72
ββΏ» Sound73
ββΏ» Sound74
ββΏ» Sound75
ββΏ» Sound76
ββΏ» Sound77
ββΏ» Sound78
ββΏ» Sound79
ββΏ» Sound80
ββΏ» Sound81
ββΏ» Sound82
ββΏ» Sound83
ββΏ» Sound84
ββΏ» Sound85
ββΏ» Sound86
ββΏ» Sound87
ββΏ» Sound88
ββΏ» Sound89
ββΏ» Sound90
ββΏ» Sound91
ββΏ» Sound92
ββΏ» Sound93
ββΏ» Sound94
ββΏ» Sound95
ββΏ» Sound96
ββΏ» Sound97
ββΏ» Sound98
ββΏ» Sound99
ββΏ» Sound100
ββΏ» Sound101
ββΏ» Sound102
ββΏ» Sound103
ββΏ» Sound104
ββΏ» Sound105
ββΏ» Sound106
ββΏ» Sound107
ββΏ» Sound108
ββΏ» Sound109
ββΏ» Sound110
ββΏ» Sound111
ββΏ» Sound112
ββΏ» Sound113
ββΏ» Sound114
ββΏ» Sound115
ββΏ» Sound116
ββΏ» Sound117
ββΏ» Sound118
ββΏ» Sound119
ββΏ» Sound120
ββΏ» Sound121
ββΏ» Sound122
ββΏ» Sound123
ββΏ» Sound124
ββΏ» Sound125
ββΏ» Sound126
ββΏ» Sound127
ββΏ» Sound128
ββΏ» Sound129
ββΏ» Sound130
ββΏ» Sound131
ββΏ» Sound132
ββΏ» Sound133
ββΏ» Sound134
ββΏ» Sound135
ββΏ» Sound136
ββΏ» Sound137
ββΏ» Sound138
ββΏ» Sound139
ββΏ» Sound140
ββΏ» Sound141
ββΏ» Sound142
ββΏ» Sound143
ββΏ» Sound144
ββΏ» Sound145
ββΏ» Sound146
ββΏ» Sound147
ββΏ» Sound148
ββΏ» Sound149
ββΏ» Sound150
ββΏ» Sound151
ββΏ» Sound151
ββΏ» Sound153
ββΏ» Sound154
ββΏ» Sound155
ββΏ» Sound156
ββΏ» Sound157
ββΏ» Sound158
ββΏ» Sound159
ββΏ» Sound160
ββΏ» Sound161
βββ±
ββββββββββββββββββββ¬£

ββββ± *γ RPG MENU γ* βββ¬£
βββ±
ββΏ» Leaderboard
ββΏ» Inventori
ββΏ» Mining
ββΏ» Jual
ββΏ» Beli @User
ββΏ» Heal
ββΏ» Berburu
βββ±
ββββββββββββββββββββ¬£

ββββ¬£  Thanks To  ε
β π₯ The Zyrenn 
β π₯ Hw Mods Wa
β π₯ Kizyy Kanaeru
β π₯ The Joo
β π₯ Yenzyy Mods
β π₯ Dizyy Mods
β π₯ Lukyy (saya)<
ββββ¬£  βΏ» Botz Wa βΏ»
`
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})