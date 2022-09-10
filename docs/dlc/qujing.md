---
title: 取经之路
---

# 取经之路

取经算是西游记里老牌大型副本之一，全部完成大约可以获取

- ??? 点潜能
- 所有skills + 1
- 三次起死回生的机会

## 1. 宝象国／碗子山
```html
fly baoxiang;#6 s;n;sw;#3 w;nw
河面上的船慢慢聚在一起。
look
河面上有一串用船搭成的简易浮桥(qiao)。
n;ne;nu;nw;ne;se;s;se;break shi ban;se;kill huangpao guai
奎木狼星嗖地向天空飞去……
#6 {kill shan yao %i}
ask baihua xiu about king（国王、信、letter）
百花羞给你一封秘信。
nw;fly baoxiang;#6 s;#7 su;give mi xin to guo wang
旁边早有军机大臣上前递给你一支军令牌。
#7 nd;n;sw;#3 w;nw
河面上的船慢慢聚在一起。
河面上有一串用船搭成的简易浮桥(qiao)。
n;ne;nu;nw;ne;se;s;se;break shi ban;se
百花羞决定开始跟随你一起行动。
nw;nw;n;nw;sw;se;sd;sw
河面上的船慢慢聚在一起。
河面上有一串用船搭成的简易浮桥(qiao)。
s;se;#3 e;ne;s;#7 su
国王见了百花羞一愣，然后老泪纵横地将百花羞拉过去。

【闲聊】国王(Guo wang)：但愿人长久兴兵领将，替宝象大国捉杀妖魔，解救百花公主！
【闲聊】国王(Guo wang)：但愿人长久顺利闯过西行又一关！
```

## 2. 平顶山／莲花洞／压龙山／压龙洞
```html
fly yalong;se;wu;sw;sw;se;s;sw;e;#2 {kill xiao yao %i}
kill lao nainai
老奶奶翻倒在地现了真身，是一只狐狸精。
w;sw;#2 {kill xiao yao %i}
kill huaqi dawang
狐阿七大王翻倒在地现了真身，是一只狐狸精。
get huangjin sheng from corpse;ne;ne;n;nw;ne;fly pingding;nw;ne;se;se;se;s;#2 {kill xiao yao %i} kill jinjiao dawang
金角童子往外奔去，丢下一只紫金红葫芦。
get hu lu;n;ne;#3 {kill xiao yao %i}
kill yinjiao dawang
银角童子往外奔去，丢下一只羊脂玉净瓶。

【闲聊】太上老君(Taishang laojun)：但愿人长久平顶山压龙山施威，替老夫收回金银童子！
【闲聊】太上老君(Taishang laojun)：但愿人长久顺利闯过西行又一关！
```
## 3. 乌鸡国／宝林寺
```html
fly changan;s;w;buy axe
你向周铁匠买下一把铁斧。
e;fly wuji;#5 e;eu;se;eu;n;enter;n;w;sleep
守寺僧说道：“寺院恕不接客，请回。”
kill shousi seng
守寺僧死了。
enter;n;w
等到晚上的时候
sleep
只听风声一时过处，青烟中现出一个水淋淋的人影。
ask ghost guo wang about 报仇
冷风一过，你像是猛然惊醒，乌鸡国王已经不见了。
e;s;out;s;wd;nw;wd;#5 w;#3 n;#3 w;n;
护宫卫士喝道：禁行！
kill wei shi
护宫卫士死了。
#3 w;n;look
后宰门
e;give yu gui to wang hou
王后给你一柄金厢白玉圭。
e;#5 s;#5 e;eu;se;eu;su;give yu gui to tai zi
太子给你一小瓶乌鸡精。
nd;wd;nw;wd;#5 w;#3 n;#3 w;n;
后宰门
#2 e;n;enter;wield axe;#5 {kan bajiao}
只听轰的一声，芭蕉树倒了，地下露出一口井。
#2 d;w;
井龙王双手抱拳，作了个揖道：各位仙长请了！
ask jing longwang about king
井龙王一挥手，水下浮起两夜叉，将什么东西抬将过来。
apply king
国王决定开始跟随你一起行动。
#2 u;out;#2 s;
<!-- 
    记得check guo wang;check guo wang 2;杀法力是神出鬼没那个国王
-->
kill guo wang 2
天上远远传来文殊菩萨的笑声。
<!-- 
    太子如果不杀你就行了，太子如果杀你这关得要重新来。太子会给你一瓶乌鸡精。
    假国王会杀了真国王的，杀慢了就要重来了。
-->
【闲聊】国王(Guo wang)：但愿人长久乌鸡国救我回生，大灭妖道还我乾坤！
【闲聊】国王(Guo wang)：但愿人长久顺利闯过西行又一关！
```

## 4. 车迟国／三清观
```html
fly chechi;#5 s;#4 w;#2 n;#5 w;e;#4 s;#3 n;w;#3 s;#3 e;#3 nu;n
三清殿
bian taishang laojun;lift laojun;s;open door;e;throw laojun
只听“嗵”地一声，太上老君溅起一阵臭气。
w;n;eat zheng su
羊力大仙决定开始跟随你一起行动。
s;#3 sd;#3 e;#3 n;w;s;#2 w;#5 n
护宫卫士喝道：禁行！
kill wei shi
护宫卫士死了。
#3 n
国王决定开始跟随你一起行动。
#2 s;w;
监斩官对你说道：“请上云梯，于台顶坐禅显圣。”
climb yun chantai
只见你倒栽葱一般摔将下来，梆地砸在地上。
你的眼前一黑，接着什么也不知道了　　　
慢慢地你终于又有了知觉　　　
exert recover;exert refresh;climb yun chantai
虎力大仙像秤砣一样叭地砸在地上，摔得鼻青脸肿。
只见你携云纵身，健步飞跃直下，稳稳地落在地上。
监斩官兴奋地点点头，向你拜道：“请！”
e
监斩官对你说道：“隔板猜枚，请道出朱红柜子里为何物。”
guess 宫衣（桃子，道童）
监斩官对你说道：“恕你一回，速猜！”
guess 宫衣（桃子，道童）
监斩官说道：“开柜！”
朱红柜子打开，果然是
监斩官面露喜色，连声向你拜道：“请！”
e
监斩官对你说道：“请下油锅，与国师双武洗。”
enter youguo
你的眼前一黑，接着什么也不知道了　　　
慢慢地你终于又有了知觉　　　
exert recover;exert refresh;enter youguo
羊力大仙软软地倒下，留下一根灰色羊角。
监斩官兴奋地点点头，向你拜道：“请！”
国王大悟道：“果然是兽精！”
国王又道：“寡人糊涂，竟尊其为国师，岂不殃民祸国！”
第一个比台顶坐禅
第二个比隔板猜枚，就三样，宫衣、桃子、道童，一直猜一样东西准能行。
第三个比武洗油锅

【闲聊】国王(Guo wang)：但愿人长久车迟国施展圣手，大破妖道！
【闲聊】国王(Guo wang)：但愿人长久顺利闯过西行又一关！
```

## 5. 通天河／陈家庄
```html
fly tongtian;#5 s;#2 n;e;ne;e;se;bian kid;out;w;sw;w;n;w
kill jinlin guai，等金鳞怪逃跑后，up,cast tudi, ask tudi about 金鳞怪,
e;e;#5 s;#3 n;ask kid about 金鳞怪
给你花篮后
s;e;ne;e;se;bian kid;out;w;sw;w;n;w;
冰面上裂开一道裂缝，你一个趔趄不由自主地摔进水中！
#6 {kill yao jing %i};kill jinlin guai
金鱼闻声，乖乖地一纵身扭着腰摇晃着头游走了。
到河底身上要有避水咒(Bishui zhou)，还要变得和小童一模一样！金鳞怪的锤子不弱，多带
些称手的家伙，小心兵器经受不住砸。 

【闲聊】陈长老(Chen zhanglao)：但愿人长久通天河救童男女，水宅降鱼精！
【闲聊】陈长老(Chen zhanglao)：但愿人长久顺利闯过西行又一关！
```

## 6. 金兜山／金兜洞
```html
fly jindou;sw;n;#2 nw;n;bian yao guai;s;se;sw;bian;s;sw;w;dig sha
拿到jin dan sha后,throw sha on dawang;
打中之后 kill dujiaosi dawang
大青牛沿着李老君声音的方向奔去，丢下一只金刚琢。

要变成个妖怪才找的到洞口。小心独角兕大王的金刚琢，多带些称手的家伙，免得兵器不保
。杀了独角兕大王可以得到金刚琢(Jingang zhuo)一只白森森的圈子。 

【闲聊】李老君(Li laojun)：但愿人长久金兜山大战独角兕，替老夫收回青牛！
【闲聊】李老君(Li laojun)：但愿人长久顺利闯过西行又一关！
```

## 7. 女儿国／解阳山
```html
男id ask princess about 结婚
女id ask princess about 伴娘
answer 愿意
进迷宫后等4分钟左右一路往西走，到头后捡起项链(icedew lace)
wear icedew

【闲聊】西梁披霜仙后(Xiliang xianhou)：但愿人长久寻回国宝冰露珠项链,西梁上下奔走相告！
【闲聊】西梁披霜仙后(Xiliang xianhou)：但愿人长久，顺利闯过西行又一关！ 
```

## 8. 毒敌山／琵琶洞
```html
fly tongtian;#5 s;#2 n;e;ne;e;n;e;ne;bian gong ji;out
你手捻口诀，念动真言，摇身一变，变得和公鸡一模一样！
fly dudi;nw;#2 ne;sw;se;enter;wield all
一洞门
break;sw
拉拉扯扯揪住你不放。
#4 {kill yao jing %i}
二洞门
break;s
拉拉扯扯揪住你不放。
#4 {kill yao jing %i}
三洞门
break;se;s;kill xiezi jing
天空闪过昴宿星官的影子，将蝎子拾起驾云而去。
【闲聊】昴宿星官(Maoxiu xingguan)：但愿人长久毒敌山显圣名，琵琶洞除蝎怪！
【闲聊】昴宿星官(Maoxiu xingguan)：但愿人长久顺利闯过西行又一关！
```

## 9. 火焰山／翠云山
```html
fly firemount;cast tudi;ask tudi about 芭蕉骨
找到芭蕉骨就给铁扇公主
fly firemount;wu;su;wu;su;#2 e;get stone;hit door
一阵红云降临，云里雾在云里出现。
ask cloud fog about princess（铁扇公主、公主）;fight cloud fog
一阵红雾降临，雾里云在雾里出现。
ask fog cloud about princess;fight fog cloud
门外传来{云里雾|雾里云}的声音：别忘了叩见公主。
koujian princess
一阵红色云雾聚在一起，慢慢凝做铁扇公主。
give bone to gongzhu
给了差不多10根后，铁扇公主苦笑一下，很不情愿地双手捧出铁扇，交给你。

out;#2 w;nd;ed;nd;ed;n;#3 nu;ed;#2 nd;#2 ne;#2 wu
火焰山
shan
只见你拼命地抡起大铁扇只一扇。
#wa 5000;wd
刹那间天昏地暗，轰隆隆几声剧响之后，一切都平静了！
你抑制住砰砰心跳，定睛一看：大火已经被扑灭了！

【闲聊】铁扇公主(Tieshan gongzhu)：但愿人长久扑灭了火焰山八百里大火！
【闲聊】铁扇公主(Tieshan gongzhu)：但愿人长久顺利闯过西行又一关！
```

## 10. 积雷山／摩云洞
```html
fly firemount;wu;su;wu;su;#2 e;get stone;hit door
一阵红云降临，云里雾在云里出现。
ask cloud fog about princess
一阵红雾降临，雾里云在雾里出现。
ask fog cloud about princess
门外传来{云里雾|雾里云}的声音：别忘了叩见公主。
koujian princess
一阵红色云雾聚在一起，慢慢凝做铁扇公主。
bian tieshan gongzhu;out;fly jilei;sw;s;se;sw;se
大力王 牛魔王(Niumo wang)
kill yumian gongzhu
玉面公主翻倒在地现了真身，竟是一只狐狸精。
kill niumo wang
李天王走过来，用金链拴在牛鼻子上，将牛魔王牵走了。
<!--
    砍几十个牛头就过了,嘿嘿
    不能surrender,不能逃跑,不然要重来
    中途不要再下kill
-->

【闲聊】李天王(Li tianwang)：但愿人长久积雷山显神通，摩云洞降牛魔！
【闲聊】李天王(Li tianwang)：但愿人长久顺利闯过西行又一关！
```

## 11. 祭赛国／碧波潭
```html
fly jisaiguo;#4 n;w;s;buy broom from huoji;n;e;#4 s;#2 w;open door;#3 n;nu;ask kusu chanshi about 扫塔
苦宿禅师掏出把钥匙，将门上的铜锁打开。
enter;#12 {u;shao 塔}
{奔波儿灞|灞波儿奔}交给你一封帖。
#12 down;knock door
小门被人打开了。
out;sd;#2 s;open door;s;#2 e;#4 n;#2 w;nu;n;give shu tie to jisai guowang
你给祭赛国国王一封书帖。
s;sd;#4 w;sw;s;se;s;sw;su;wd;sd;se;ed;se;e;dive
你游了过来。
nu;#2 n;bian tianboer xiao
西波儿古嚷道：宫中有贵客，闲人免进！
kill xiboer gu
西波儿古死了。
nu;#2 n;bian tianboer xiao
古波儿西嚷道：宫中有贵客，闲人免进！
kill guboer xi
古波儿西死了。
nu;#2 n;bian tianboer xiao
你手捻口诀，念动真言，摇身一变，变得和天波儿笑一模一样！
kill tianboer xiao 2
天波儿笑死了。
kill xiaoboer tian
笑波儿天死了。
#2 e;enter ask wansheng gongzhu about 方位
万圣公主在你的耳边悄声说道：今日方位在（）位。

干 
out;#2 w;open door;n;jump;push table
兑 
out;#2 w;open door;n;ne;jump;push table
离 
out;#2 w;open door;n;#2 ne;jump;push table
震 
out;#2 w;open door;n;#2 ne;nw;jump;push table
巽 
out;#2 w;open door;n;nw;jump;push table
坎 
out;#2 w;open door;n;#2 nw;jump;push table
艮 
out;#2 w;open door;n;#2 nw;ne;jump;push table
坤 
out;#2 w;open door;n;#2 nw;#2 ne;jump;push table

你使尽全身力气推开了石桌，露出个金光灿灿的匣子。
get tooth from xiazi
你从黄金匣子中拿出一颗佛宝舍利子。
#4 s;sd;s;sd;#2 s;up;w;nw;wu;nw;nu;eu;nd;ne;n;nw;n;ne;#4 e;nu;n;give tooth to jisai guowang
你给祭赛国国王一颗佛宝舍利子。

变成天波儿笑不要变错了，不然公主和附马会杀你的。黄
金匣子内没有东西就等刷新。 

【闲聊】祭赛国国王(Jisai guowang)：但愿人长久替朕取回佛宝舍利子，为祭赛百性造福，真侠义
心肠也！
【闲聊】祭赛国国王(Jisai guowang)：但愿人长久顺利闯过西行又一关！
```

## 12. 荆棘岭／木仙庵
```html
fly jingjiling;#9 push jingji;exert recover
荆棘被推到两旁，闪出一条道路。
wu;sw;w;nw;wu;nw;wu;s;#9 push jingji;exert recover
萝藤坪
su;sw;fight lingkong zi
赤身鬼使一挺手中钢叉，挡住了你的去路。
kill guard
赤身鬼使死了。
su;sw;fight lingkong zi
凌空子对你问道：“明月出天山”的下句是什么？
answer 苍茫云海间
凌空子身影一晃便不见了。
se;fight shiba gong
十八公对你问道：“花间一壶酒”的下句是什么？
answer 独酌无相亲
十八公身影一晃便不见了。
e;fight fuyun sou
拂云叟对你问道：“五岳寻仙不辞远”的下句是什么？
answer 一生好入名山游
ne;fight guzhi gong
孤直公对你问道：“君不见，黄河之水天上来”的下句是什么？
answer 奔流到海不复回
孤直公身影一晃便不见了。
nw;fight lingkong zi
凌空子对你一鞠躬：不错，不错！
fight shiba gong
十八公对你一鞠躬：不错，不错！
fight fuyun sou
拂云叟对你一鞠躬：不错，不错！
fight guzhi gong
孤直公对你一鞠躬：不错，不错！ 


【闲聊】拂云叟(Fuyun sou)：但愿人长久荆棘岭斗智斗武，力挫众仙！
【闲聊】拂云叟(Fuyun sou)：但愿人长久顺利闯过西行又一关！
```

## 13. 荆棘岭／木仙庵
```html
fly jingjiling;#9 push jingji;exert recover
荆棘被推到两旁，闪出一条道路。
wu;sw;w;nw;wu;nw;wu;s;#9 push jingji;exert recover
萝藤坪
su;sw;fight lingkong zi
赤身鬼使一挺手中钢叉，挡住了你的去路。
kill guard
赤身鬼使死了。
su;sw;fight lingkong zi
凌空子对你问道：“明月出天山”的下句是什么？
answer 苍茫云海间
凌空子身影一晃便不见了。
se;fight shiba gong
十八公对你问道：“花间一壶酒”的下句是什么？
answer 独酌无相亲
十八公身影一晃便不见了。
e;fight fuyun sou
拂云叟对你问道：“五岳寻仙不辞远”的下句是什么？
answer 一生好入名山游
ne;fight guzhi gong
孤直公对你问道：“君不见，黄河之水天上来”的下句是什么？
answer 奔流到海不复回
孤直公身影一晃便不见了。
nw;fight lingkong zi
凌空子对你一鞠躬：不错，不错！
fight shiba gong
十八公对你一鞠躬：不错，不错！
fight fuyun sou
拂云叟对你一鞠躬：不错，不错！
fight guzhi gong
孤直公对你一鞠躬：不错，不错！ 


【闲聊】拂云叟(Fuyun sou)：但愿人长久荆棘岭斗智斗武，力挫众仙！
【闲聊】拂云叟(Fuyun sou)：但愿人长久顺利闯过西行又一关！
```

## 14. 小西天／小雷音寺
```html
fly xiaoxitian;s;e;kill huangmei laofo
别杀死，进金钵后不停的out，出来了后cast tudi;ask tudi about 黄眉老佛;fly lingshan， 找到mile foz
u，ask fozu about 黄眉老佛;ask fozu about 真诀, nick （佛祖告诉你的那个字），再去把老佛干掉。

弥勒佛祖领着黄眉小童走了出去，丢下一只旧白布搭包。

【闲聊】弥勒佛祖(Mile fozu)：但愿人长久小西天金铙脱险，小雷音寺战胜黄眉老佛！
【闲聊】弥勒佛祖(Mile fozu)：但愿人长久顺利闯过西行又一关！
```

## 15. 朱紫国／麒麟山／獬豸洞
```html
fly zhuzi;#8 n;#6 s;jiebang 
你仔细地将榜揭下来。
#5 s;#2 e;ask guo wang about 不适（病、医、医治、医疗、药、吃药）
国王说道：这位(%x)，可否为朕寻得乌金丹？
#2 w;#5 n;e;n;buy yaozhan from laotong;buy yao from laotong
买下大黄,巴豆,白芷
一直买，买到为止。
put yao（大黄） in yaozhan
s;w;look qi
看旗的背景色
#3 e;n;
对照旗的颜色，fill相应的马。 
如去旗是红色，则 fill chixie ma
你将银药盏放在赤血马的肚皮底下，接了几滴尿汁。
put yao（巴豆） in yaozhan
你将银药盏里的药混合在一起，搅拌均匀。
put yao（白芷） in yaozhan
你将银药盏里的药混合在一起，搅拌均匀。
s;#3 w;#5 s;#2 e;get yao from yaozhan;give yao to wang
少顷，国王渐觉心胸宽泰，气血调和一些了。
三次之后，国王的病就好了。
国王想想对你说道：恩人可否替朕救金圣王后回宫？
#2 w;#2 n;fly qilin;right;climb up;right;climb up;nw;wu;ne;e;kill yao wang

妖王打了一个滚，现了金毛兽原形，被一道金光罩去。
nw;ne
金圣宫往东南离开。

獬豸洞口道行没有1000000会昏倒。配药的顺序是大黄、巴豆、白芷或巴豆、白芷、大黄或白
芷、大黄、巴豆按这三种顺序配的都是真药，不按这些顺序配的都是假药。

【闲聊】金圣宫(Jinsheng gong)：但愿人长久朱紫国施神力治愈万岁，解救金圣宫于三年久祸！
【闲聊】金圣宫(Jinsheng gong)：但愿人长久顺利闯过西行又一关！ 
```

## 16. 盘丝岭／盘丝洞／黄花观／紫云山
```html
fly zhuzi;#8 n;#2 w;#2 nw;sw;w;wu;se;#2 w;kill yu xiang
玉香浑身一软，攒着头现了蜘蛛精的原形。
nw;w;kill liu mei
柳眉浑身一软，攒着头现了蜘蛛精的原形。
kill hua yu
花语浑身一软，攒着头现了蜘蛛精的原形。
#2 s;kill chai tou
钗头浑身一软，攒着头现了蜘蛛精的原形。
kill tan kou
檀口浑身一软，攒着头现了蜘蛛精的原形。
s;sw;kill mi;kill ma;kill lu;kill ban;kill meng;kill la;kill qing
{蜜|蚂|卢|班|蜢|蜡|蜻}变成一只小虫儿嘤嘤地飞走了。
ne;#3 n;e;se;e;sw;se;e;sd;kill jiang qun
绛裙浑身一软，攒着头现了蜘蛛精的原形。
kill jin lian
金莲浑身一软，攒着头现了蜘蛛精的原形。

kill huanghua wugong
要被他蛰一下：
黄花五公一抬手，胁下千只眼睛金光闪闪射向你！
( 你痛苦地惨嚎了一声！ )

还要打伤他，令到他recover一下：
黄花五公身上万道金光一闪，顿时精神气血尽回！

然后去ask furen about 黄花五公;ask furen about 黄钱
然后在山涧 jump， 到屋内等毗蓝婆,ask po about 绣花针
wield zhen
kill huanghua wugong
（还会被蛰的）
蜈蚣精化为一股青烟噌地消散了。

【闲聊】毗蓝婆(Pilan po)：但愿人长久盘丝岭尽除蜘蛛精黄花观降服蜈蚣精！
【闲聊】毗蓝婆(Pilan po)：但愿人长久顺利闯过西行又一关！ 
```

## 17. 比丘国／清华庄／清华洞
```html
fly wudidong;ne;nu;ed;se;#4 e;open e long;n;open e long;w;ne;#2 e;se;s;sw;se;w;
zuochan
你坐禅完毕，起身。
zuochan
"求经者，万缘都罢。",
"了性者，诸法皆空。",
"大智闲闲，澹泊在不生之内。",
"真机默默，消遥于寂灭之中。",
"三界空而百端治，六根净而千种穷。",
"若乃坚诚知觉，须当识心。",
"心净则孤明独照，心存则万境皆清。",
"真容无欠亦无余，生前可见。",
"幻相有形终有坏，分外何求。",
"行功打坐，乃为入定之原。",
"布惠施恩，诚是修行之本。",
"大巧若拙，还知事事无为。",
"善计非筹，必须头头放下。",
"但使一心不动，万行自全。",
"若云采阴补阳，诚为谬语，服饵长寿，实乃虚词。",
"只要尘尘缘总弃，物物色皆空。",
"素素纯纯寡爱欲，自然享寿永无穷。",
你沉思少顷，觉得禅意似乎已尽。
e;nw;ne;n;nw;#2 w;sw;#2 s;sw;s;#2 w;s;kill mei hou
美后扑在地上现了原身，原是一只狐狸精。
n;kill guo zhang
等你恍恍惚惚睁开眼时，国丈已无踪无影！
#2 e;fly qinghua;w;#3 turn left;#3 turn right;push tree
刹那间，一声响亮唿喇喇闪开两扇门，你一头撞将进去。
kill guo zhang
天上传来南极老人的怒斥：“孽鹿！连老夫的拐杖也偷了去！

【闲聊】国王(Guo wang)：但愿人长久比丘国拯救无辜小童清华洞治服孽畜！
【闲聊】国王(Guo wang)
```

# 18. 无底洞／黑松林
```html
fly wudidong;wu;sd;sw;w;s;s;enforce 100;push statue
你纵身一跃，跳了进去，大洞随即又合上了。
enforce none;sw;su;su;wu;dive dong
你一纵身，跳入洞中，足下彩云生万道，身边瑞气护千层。
n;n;w;bian tian shu;e;n;n;n;ask yu shu about key（钥匙）;s;s;bian;unlock
你走进来，顺手关上了门，上了锁。
n
你隐隐觉得有些不对，也不知为什么。似乎有什么机关需要你去破(disarm)。
disarm
你成功地拆除了房间里的机关。
n;#2 {kill ward %i};n
狱守死了。
n
狱中
方丈 圆清(Yuan qing)

ask yuan qing about rescue
你向圆清打听有关‘rescue’的消息。
圆清说道：这位施主是来搭救于我的？
圆清说道：这、这、这，老衲可真是太感谢飞天御剑剑流之冒牌传人了！
圆清说道：先师圆寂前传给老衲些许法术，也许能够帮助飞天御剑剑流之冒牌传人改变一些先天的能力。

圆清口中念念有词，伸手向你一指，喝声“疾”！
你的*增加了三点！
圆清由衷地向你道谢。
圆清说道：老纳这就起程回寺！
圆清往南离开。

【谣言】某人：听说但愿人长久独闯无底洞，救出了玉鼠精抓去的一个老和尚，也不知是真是假。
```


## 19. 钦法国
```html
找一本〖金刚经〗。
fly wudidong;wu;sd;sw;#12 w;n;kill qian guafu
钱寡妇死了。
get ti dao from corpse;s;w;n;#20 buy chong from guafu;s;#4 e;#2 n;#4 e;apply wang hou 
（注意：放瞌睡虫需要500门忠）
王后忍不住打了一个哈欠，满脸睡意。
apply（fang） wang hou
王后往被中一钻，不一会便鼾声大作，进入了梦乡。
cut（ti） wang hou
唰唰唰，王后的头发落下一片。
cut wang hou
王后一觉醒来，精力充沛地活动了一下筋骨。
apply wang hou
王后的头发给剃光了。
n;apply gong fei
宫妃忍不住打了一个哈欠，满脸睡意。
apply gong fei
宫妃往被中一钻，不一会便鼾声大作，进入了梦乡。
cut gong fei
唰唰唰，宫妃的头发落下一片。
cut gong fei
宫妃一觉醒来，精力充沛地活动了一下筋骨。
apply gong fei
宫妃的头发给剃光了。
#2 s;apply gong fei
宫妃忍不住打了一个哈欠，满脸睡意。
apply gong fei
宫妃往被中一钻，不一会便鼾声大作，进入了梦乡。
cut gong fei
唰唰唰，宫妃的头发落下一片。
cut gong fei
宫妃一觉醒来，精力充沛地活动了一下筋骨。
apply gong fei
宫妃的头发给剃光了。
n;w;apply guo wang
国王忍不住打了一个哈欠，满脸睡意。
apply guo wang
国王往被中一钻，不一会便鼾声大作，进入了梦乡。
cut guo wang
唰唰唰，国王的头发落下一片。
cut guo wang
国王一觉醒来，精力充沛地活动了一下筋骨。
apply guo wang
国王的头发给剃光了。
国王一阵眩晕，差点摔倒在地！（切记头发一定要全部剃光！）
give jingang to guo wang
国王捧起〖金刚经〗，聚精会神地读了起来。
ask guo wang about buddhism（monk、佛、佛教、和尚、拜佛、入佛、入佛门 ）
国王沉默几许，点了一下头。
国王说道：朕曾因僧谤了朕，许天愿要杀一万和尚做圆满。
国王说道：不期今夜归依，教朕等为僧。
国王说道：如今发都剃落了，朕愿入佛门。
国王又说道：此乃天意也。

【闲聊】国王(Guo wang)：但愿人长久灭法国劝朕归依佛门，朕改国号为钦法国！
【闲聊】国王(Guo wang)：但愿人长久顺利闯过西行又一关！ 
```

## 20. 隐雾山／连环洞
```html
fly yinwu;#4 nw
山妖呲牙咧嘴地死活不让你过！
busy它,然后nw;nu;w;sw;sd;climb up
你手脚并用奋不顾身地向上爬去。
……哗哗一声，你失手滑了下来。
你的眼前一黑，接着什么也不知道了
　　　慢慢地你终于又有了知觉　　　
climb up
你手脚并用奋不顾身地向上爬去。
break door
你憋红了脸大喝一声向门砸去！
一阵乱石轰响，砸在你的头上！
你的眼前一黑，接着什么也不知道了
　　　慢慢地你终于又有了知觉　　　
ask tu di about fajian
白髯土地给你一根法简。
fly yinwu;#3 nw;ne
山妖呲牙咧嘴地死活不让你过！
busy, ne;e;se;打晕xiao yao;apply xiao yao
bian 水老鼠
sd;你往水里一扎潜了下去……
bian;w
守亭妖精一把将你劈胸揪住死活不让你过！
bian 飞蚂蚁;w
kill yao wang
艾叶花皮豹子死了。

【闲聊】白髯土地(Tu di)：但愿人长久隐雾山施法，连环洞灭妖邪！
【闲聊】白髯土地(Tu di)：但愿人长久顺利闯过西行又一关！
```

## 21. 凤仙郡
```html
这关先要ask junzhu about 祈雨，然后
fly yinwu;sw;#4 w;#2 sw;s;w;#2 s;ketou
你缓缓起身。
ketou
庙祝狂喜道：天上风神传话：披香殿米山全都倒了！
#2 n;#3 w;#2 n;zhanbai
你呼出一口气，抬起头来。
zhanbai
法师大惊道：天上电娘子传话：披香殿面山整个儿倒掉了！
#2 s;#3 w;s;w;nianxiang
你香毕，又一俯拜。
nianxiang
祭官大惊道：天上雷公有话：披香殿金锁已断！
e;#2 n;give 200 gold to cibei heshangs;#3 e;#2 s;sw;se
上官郡主向你道谢。

（50－福缘）*5＝给慈悲和尚(Cibei heshang)的钱（Gold），最少100Gold最多200Gold。
本关是取经路上真正不用打的一关。 

【闲聊】上官郡主(Shangguan junzhu)：但愿人长久凤仙郡劝善施霖，救得饥民千千万万！
【闲聊】上官郡主(Shangguan junzhu)：但愿人长久顺利闯过西行又一关！
```

## 22. 玉华县／豹头山／虎口洞／竹节山／九曲盘桓洞
```html
fly baotou;se;#2 ed;nw;nu;#3 nw;#2 nu;bian diaozuan guguai
你手捻口诀，念动真言，摇身一变，变得和刁钻古怪一模一样！
#2 sd;#2 wu;nw;ask guguai diaozuan about dong（虎口洞）
洞口一阵腥风吹来，你感到一阵突如其来的头晕。
nw;n;ne;climb;get all
妖王对你喝道：哪里逃！
kill yao wang
金毛狮子死了。
ne;climb
你从岩壁上滑了下来！
kill yao guai
*怪死了。
climb
你揉揉眼睛，醒了过来。get all;down
你一觉醒来，只觉精力充沛。该活动一下了。
get all;down
慢慢地你终于又有了知觉　　　
get all;down
你捡起一条小金箍棒。
你捡起一杆小降妖杖。
你捡起一柄小九齿钯。
你捡起一柄太乙竹刀。（几样动西要全部找到！！）
sw;s;se;fly yuhua;#7 s;#3 n;#5 e;#3 w;#2 s;e;give xiao jingu bang to da wangzi
你给大王子一条小金箍棒。
e;give xiao jiuchi pa to er wangzi
你给二王子一柄小九齿钯。
e;give xiao xiangyao zhang to xiao wangzi
你给小王子一杆小降妖杖。
#3 w;#10 n;nw;#3 ne;nu;nw;ne;nu;e;ne;nw;w;sw;w;nw;w;sw;wield taiyi zhu dao;kill jiutou shi
九头狮随着一阵彩云而去。

【闲聊】老王爷(Lao wangye)：但愿人长久豹头山寻得三兵器，竹节山制服九头狮怪！
【闲聊】老王爷(Lao wangye)：但愿人长久顺利闯过西行又一关！
```


## 23. 金平府／青龙山／玄英洞
```html
先在jinping kill npc拿到灯笼(deng)，然后look deng，如果动物数字是对的，就是好灯。
然后，fly jinping;#2 s;#3 e;#2 w;s;#4 buy hulu from zhu;n;#2 e;#3 n;fill hulu;s;e;fill hulu;w;s;e;fill hulu;w;s;w;n;fill hulu;s;#2 w;#3 n;#4 pour gang
灯官告诉你：佛爷要来了！
一阵狂风吹来，佛爷出现！
佛爷携着你飞上天空！
佛爷突然停下来，顺便将你往地上一扔！
你的眼前一黑，接着什么也不知道了　　　
慢慢地你终于又有了知觉　　　
#2 ne;n;e
守门牛精一晃两只大牛角抵住你：想溜到哪儿去？（多带一个装满油的 hu lu）
give hulu to shoumen niujing
守门牛精说道：谢谢！
e;ne;follow pihan dawang;kill pihan dawang
辟寒大王扑倒在地，还原为一头犀牛。
e;e;follow pishu dawang;kill pishu dawang
辟暑大王扑倒在地，还原为一头犀牛。
e;se;follow pichen dawang;kill pichen dawang
辟尘大王扑倒在地，还原为一头犀牛。
w;s;sw 
40－先天福缘数＝倒酥合香油的次数。中间等油罐刷新的时间试着过其他关吧。记得在灯官
告诉你：再倒一次便可。之前把身上所有的东西全卖了，钱也存好

【闲聊】府令(Fu ling)：但愿人长久金平府灯会解难，青龙山除犀牛精！
【闲聊】府令(Fu ling)：但愿人长久顺利闯过西行又一关！
```

## 24. 天竺国／毛颖山／三连穴
```html
fly tianzhu;#7 w;#4 s;#3 e
彩楼上有人高喊：公主拈香完毕，正祝告天地。
彩楼上有人又高喊：公主临窗，伺女备球！
底下无数看客高声呐喊：抢绣球也！抢绣球也！
一只绣球飞来，啪地砸在你的头上！
你晕晕乎乎地清醒了过来。
公主对国王撒了个娇，红着脸向后宫走去。
#2 n;kill gong zhu
公主往旁边一跳，一转眼已无踪无影！
#4 s;fly tianzhu;#7 w;#8 s;#3 e;se;#4 s;sw;s;#2 se;sw;eu;se;se;eu;#2 se;enter
你在蒿*石缝中扒开一个洞，钻了进去。
kill gong zhu
公主往旁边一跳，一转眼已无踪无影！
nw;ne;e;se;sw;w;#9 n
你在黑暗中找到一出口，挤了出去。
ne;eu;se;eu;#2 se;enter;kill gong zhu
公主现了原形，竟是一只玉兔。
nw;ne;e;se;sw;w;#9 s
你在黑暗中找到一出口，挤了出去。
fly tianzhu;#7 w;#4 s;#3 e;#4 n;ask guo wang about princess
国王决定开始跟随你一起行动。
#4 s;#4 e;se;s;#2 se;s;#2 sw;s;#2 w
方丈决定开始跟随你一起行动。
e;se
方丈小心地将小木门打开。
se
一行人往外走去。

【闲聊】国王(Guo wang)：但愿人长久天竺国大战兔妖，救回天竺公主！
【闲聊】国王(Guo wang)：但愿人长久顺利闯过西行又一关！
```

## 结束
```html
过完了,去灵山找迦叶尊者
ask jiaye about qujing
迦叶尊者告诉你：你西行求取真经已历尽了所有的难关。 
然后去见rulai fo
ask rulai fo about obstacles
【闲聊】如来佛(Rulai fo)：*不远万里前来取真经！
【闲聊】如来佛(Rulai fo)：诸位仙贤如愿观礼，使accept rulai fo便可！
如来佛对你摇摇头：西游记现有*位玩家，此处仅有数位仙贤在邀，可否再邀*位仙贤前来观礼？
要找够人,呵呵
【闲聊】如来佛(Rulai fo)：西游记西天取真经观礼：*大雄宝殿拜礼！
【闲聊】如来佛(Rulai fo)：*西天取经历经灾愆，奖励*点潜能！
【闲聊】如来佛(Rulai fo)：*西天取经功德无量，奖励*级技能！
如来佛说道：日后若有不测，可来大雄宝殿起死回生三次。

奖励: potential,数量多少每个都不同
skills全部加一级
三次起死回生的机会

obstacles
你西行求取真经已历尽了所有的难关。
```