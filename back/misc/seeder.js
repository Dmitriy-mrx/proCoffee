import Coffee from '../models/coffee.js';
import db from './db.js';

export default function coffeeSeeder() {
  db.then(async ({ connection, disconnect }) => {
    await connection.db.dropDatabase();
    await Coffee.insertMany([
      {
        title: 'Ява Золотая',
        description: 'Уилдан с женой Атек владеют кооперативом Фринса, который расположен в Западной Яве, в Сунде, на высоте около 1400 м над уровнем моря. Они имеют станцию мытой обработки, станцию сухой обработки, а также хорошо вентилируемые складские помещения. Это означает, что они полностью контролируют свой продукт от сбора урожая до сортировки и отгрузки. Одна из разновидностей, которую они выращивают Сигарар Утанг - это гибрид Тимора и Бурбона. Он был создан для того, чтобы индонезийским фермерам было проще выращивать кофе, ведь он очень плодоносен и устойчив ко многим болезням, что актуально в условиях жаркого и влажного климата Индонезии. Кофе ферментировали по нашему профилю горячей анаэробной ферментации, целью которого было подчеркнуть его дескрипторы и сладость.',
        uniq: 'Ява Золотая',
        tags: 'tut tag',
        region: 'Сунда',
        type: 'Фильтр',
        acidity: 'высокая',
        process: 'Натуральный, лакто-анаэробная ферментация',
        image: 'yava_zolotaya_1_kg_min.png',
      },
      {
        title: 'Уганда Бузи Черри',
        description: 'Высота произрастания разбросана от 1500 до 2000 м над уровнем моря. Пейзажи здесь потрясающие! Всего в нескольких километрах отсюда находится известный Национальный парк Королевы Елизаветы, одна из главных достопримечательностей Уганды. Большая часть ягод от очень маленьких фермеров, на плантациях(обычно меньше 1 га) которых 600-1000 деревьев, каждое дерево в среднем приносит 100-200 грамм зеленого зерна. Фермеры состоят в небольших общинах по 30-50 человек, где обучаются методам выращивания кофе. Здесь выращивают смешанные разновидности, преимущественно SL-14,28,34, как это делают в Кении.',
        uniq: 'Бузи Черри',
        tags: 'tut tag',
        region: 'Западная Уганда',
        type: 'Фильтр',
        acidity: 'высокая',
        process: 'Натуральный, экспериментальный',
        image: 'uganda_buzi_cherri_1000_zh_2_min.png',
      },
      {
        title: 'Колумбия Габриэль Кастаньо',
        description: 'Этот прекрасный розовый бурбон с фермы La Granada, которая находится в департаменте Уила. Ферма расположена на высоте 1600 - 1800 м над уровнем моря, а владеет ей Габриэль Кастаньо - невысокий, тихий мужчина с густыми усами, добрыми глазами, белоснежными зубами и застенчивой улыбкой. La Granada - это небольшая ферма в 5 га, за которую он выплачивал долг 14 лет. Габриэль стал известен в своём муниципалитете благодаря розовому бурбону, который представил коллегам фермерам. А про розовый бурбон есть легенда:) Когда-то Габриэль Кастаньо взял для своей фермы саженцы у отца своей жены. Посадил их и выросло дерево какой-то непонятной разновидности. К сожалению, у отца спросить уже не было возможности, так как он умер. Впоследствии из-за розового цвета ягод эту разновидность назвали розовым бурбоном. А Габриэль Кастаньо был идентифицирован как первый человек, у которого нашли эту разновидность.',
        uniq: 'Габриэль Кастаньо',
        tags: 'tut tag',
        region: 'Уила, Сан-Адольфо',
        type: 'Фильтр',
        acidity: 'высокая',
        process: 'Мытый, анаэробная ферментация 48 часов',
        image: 'Kolumbya_Gabriel_01_min.png',
      },
      {
        title: 'Эфиопии под молочко',
        description: 'Это смесь из двух натуральных Эфиопий - Сидамо и Кереча, адаптированная под молочные напитки. Эспрессо, обжарки «под молочко» (белые пачки), мы жарим чуть темнее, чем наш классический эспрессо (чёрные пачки). Профиль вкуса у Эфиопий под молочко смещён в сторону карамелизации, поэтому он более сладкий, тельный, плотный и ровный, что идеально в сочетании с молоком.',
        uniq: 'под молочко',
        tags: 'tut tag',
        region: 'Иргачиф',
        type: 'Эспрессо',
        acidity: 'needfix',
        process: 'Натуральная',
        image: 'Ephiopia_Milk_02_min.png',
      },
      {
        title: 'Колумбии под молочко',
        description: 'Это смесь из двух мытых Колумбий, пожаренная чуть темнее, чем наш классический эспрессо (вчёрных пачках), специально под молочные напитки. Этот эспрессо хорошо сбалансирован, оченьтактильный и сладкий.',
        uniq: 'под молочко',
        tags: 'tut tag',
        region: 'Нариньо',
        type: 'Эспрессо',
        acidity: 'needfix',
        process: 'Мытый',
        image: 'Columbia_Milk_02_min.png',
      },
      {
        title: 'Бурунди Бузирагухиндва',
        description: 'Бузирагухиндва - это ещё одна станция обработки, которой владеет Салюм Рамадан. Точнее это его первая станция обработки. Расположена она на больших высотах (2000 м над уровнем моря) в провинции Каянза, коммуна Мурута. А совсем неподалеку находится Национальный парк Кибира, которому уже почти 100 лет. Фермы в Бурунди небольшие, часто меньше 1-2 гектаров, на каждой из которых насчитывается несколько сотен деревьев. Это означает, что ежедневная партия, например, 25 мешков зеленого зерна может состоять из кофе от нескольких сотен фермеров. Фермеры доставляют ягоды на станцию обработки либо пешком, либо на велосипеде, либо до ближайшего пункта сбора, где помимо сборщиков Рамадана, то есть от станции Бузирагухиндва, есть и другие. Фермеры могут свободно доставлять свои ягоды тем, кто предлагает более высокую цену, конкуренция в этой области очень высокая. Чтобы привлечь фермеров, которые поставляют высокого качества ягоды, Салюм Рамадан платит надбавки выше рыночных цен, тем самым улучшая качество продукта в целом. Как и на станции обработки Шембати, здесь строгие правила приёма ягод. Помимо кофе, большинство фермеров выращивают фрукты и овощи, особенно картофель. В этом районе также выращивают много чая, особенно в окрестностях Бузирагухиндвы.',
        uniq: 'Бурунди',
        tags: 'tut tag',
        region: 'Каянза',
        type: 'Фильтр',
        acidity: 'высокая',
        process: 'Натуральная, экспериментальная',
        image: 'burundy_buziraguhindva_250_min.png',
      },
      {
        title: 'Колумбия Асиведо-Питалито',
        description: 'Бленд от нескольких маленьких производителей из микрорегиона Уила, Асиведо, Питалито.',
        uniq: 'Асиведо-Питалито',
        tags: 'tut tag',
        region: 'Уила, Асиведо, Питалито',
        type: 'Эспрессо',
        acidity: 'высокая',
        process: 'Мытый',
        image: 'kolumbiya-asivedo_pitalito2_min.png',
      },
      {
        title: 'Бразилия Наталья Гарсия',
        description: 'Сбалансированный вкус с нотами молочного шоколада, мускатного ореха и сухофруктов',
        uniq: 'Наталья Гарсия',
        tags: 'tut tag',
        region: 'Минас Жерайс, Кампо дас Вертентес',
        type: 'Фильтр',
        acidity: 'средняя',
        process: 'Натуральная, экспериментальная ферментация',
        image: 'braziliyanatalyagarsiya-228x228.png',
      },
      {
        title: 'Бразилия Ягуара',
        description: 'Сбалансированный вкус с нотами дюшеса, красного винограда, меда и темного шоколада. Плотное гладкое тело с долгим приятным послевкусием.',
        uniq: 'Ягуара',
        tags: 'tut tag',
        region: 'Минас Жерайс, Кампо дас Вертентес',
        type: 'Фильтр',
        acidity: 'ниже среднего',
        process: 'Натуральная',
        image: 'braziliyayaguara-228x228.png',
      },
      {
        title: 'Бурунди Мбиризи',
        description: 'Ярко выраженный вкус с нотами ревеня, лайма, черной смородины и тростникового сахара',
        uniq: 'Мбиризи',
        tags: 'tut tag',
        region: 'Каянза',
        type: 'Фильтр',
        acidity: 'выше среднего',
        process: 'Мытый',
        image: 'burundimbirizi-228x228.png',
      },
      {
        title: 'Индонезия Фринса Лактик',
        description: 'Сбалансированный вкус с нотами шиповника, специй, кураги и какао. Кофе с плотным телом и чистым долгим послевкусием.',
        uniq: 'Фринса Лактик',
        tags: 'tut tag',
        region: 'Сунда',
        type: 'Фильтр',
        acidity: 'выше среднего',
        process: 'хани, лактоферментация 15 часов',
        image: 'indoneziyafrinsalaktik-228x228.png',
      },
      {
        title: 'Кения Кангочо',
        description: 'Ярко выраженный вкус с нотами черной смородины, лимона, тропических фруктов и цветов',
        uniq: 'Кангочо',
        tags: 'tut tag',
        region: 'Ньери',
        type: 'Фильтр',
        acidity: 'выше среднего',
        process: 'Мытый',
        image: 'keniyakangocho-228x228.png',
      },
      {
        title: 'Кения Каримикуй',
        description: 'Ярко выраженный вкус с нотами малины, темных ягод, красной смородины и бергамота. Насыщенный аромат чая Ассам с нотами темных ягод и бергамота. Во вкусе - малина и красная смородина, ноты карамели и гибискуса. Тело сочное и гладкое. Послевкусие приятное, продолжительное. ',
        uniq: 'Каримикуй',
        tags: 'tut tag',
        region: 'Кириньяга',
        type: 'Фильтр',
        acidity: 'высокая',
        process: 'Мытый, сухая ферментация в воде 16-24 часа, промывание в каналах',
        image: 'keniyakarimikui_25CC_2586-228x228.png',
      },
      {
        title: 'Колумбия Ла Виргиния',
        description: 'Ярко выраженный вкус с нотами нектарина, клюквы, белого винограда и карамели. Сладкий аромат с оттенками тростникового сахара, изюма и пшеничного крекера. Во вкусе - клюква, нектарин, белый виноград и молочный шоколад. Сочная чашка с округлым и гладким телом.',
        uniq: 'Ла Виргиния',
        tags: 'tut tag',
        region: 'Уила',
        type: 'Фильтр',
        acidity: 'выше среднего',
        process: 'Мытый',
        image: 'kolumbiyalavirginya-228x228.png',
      },
      {
        title: 'Колумбия Рафаэль Айа',
        description: 'Ярко выраженный вкус с нотами брусники, грейпфрута и тростникового сахара. Тело средней плотности, округлое и гладкое. Продолжительное послевкусие с нотами молочного шоколада.',
        uniq: 'Рафаэль Айа',
        tags: 'tut tag',
        region: 'Уила',
        type: 'Фильтр',
        acidity: 'выше среднего',
        process: 'Мытый',
        image: 'kolumbiyarafaelai_25CC_2586a-228x228.png',
      },
      {
        title: 'Колумбия Рафаэль Айа Катурра',
        description: 'Ярко выраженный вкус с нотами вишни, шоколадного брауни и манго',
        uniq: 'Катурра',
        tags: 'tut tag',
        region: 'Уила',
        type: 'Фильтр',
        acidity: 'выше среднего',
        process: 'натуральный, экспериментальная ферментация',
        image: 'kolumbiyarafaelai_25CC_2586akaturra90-228x228.png',
      },
      {
        title: 'Коста-Рика Монтерога',
        description: 'Сбалансированный вкус с нотами сдобной выпечки, печеного яблока, изюма и сливочной пастилы. Кофе в зернах из региона Тарразу. Разновидность — катурра и катуаи, натуральная обработка и высушивание в течение 30 дней на африканских кроватях. Аромат сладкой выпечки и сухфруктов. Во вкусе — сливовая пастила, печеное яблоко, ананас и карамель. Тело плотное и округлое. У готового напитка долгое послевкусие с нотами желтого изюма.',
        uniq: 'Монтерога',
        tags: 'tut tag',
        region: 'Тараззу, Сан Исидро',
        type: 'Фильтр',
        acidity: 'ниже среднего',
        process: 'натуральный',
        image: 'kosta-rikamonteroga-228x228.png',
      },
      {
        title: 'Суматра Гайо Маунтайн',
        description: 'Самый необычный представитель Индонезии в нашем ассортименте. Такой кофе мало кто предлагает, его сложный характер заставляет многих обжарщиков отступить от дальнейших экспериментов с ним. Но мы с самого начала верили в него и добились явных успехов – найдя самый чистый образец из всех возможных, а также раскрыв его в обжарке абсолютно по-новому. Легкая кислинка, лесные дикие ягоды (черника, голубика), очень плотное тело со сложным букетом полевых цветов и растений, легкое ощущение островного виски и табака, сладкое послевкусие.',
        uniq: 'Суматра',
        tags: 'tut tag',
        region: 'Ачех',
        type: 'Фильтр',
        acidity: 'цитрусово-винная, выраженная',
        process: 'needfix',
        image: '2f7579d557446bbae793d79bfd3150f0.png',
      },
      {
        title: 'Бразилия Кармо Де Минас',
        description: 'Сладкий, сбалансированный кофе из Бразилии свежего урожая. Плотный и обволакивающий, он отлично подходит для приготовления молочных напитков, а также очень хорош в чистом виде. Кофе обладает ярким вкусом темного шоколада идеально раскроется для любителей эспрессо с низкой кислотностью. Также букет дополняет вкус апельсина и жареного фундука',
        uniq: 'Кармо Де Минас',
        tags: 'tut tag',
        region: 'Кармо Де Минас',
        type: 'Эспрессо',
        acidity: 'ниже среднего',
        process: 'needfix',
        image: 'BrazilKarmodeMinas.png',
      },
      {
        title: 'Эфиопия Анасора',
        description: 'Станция обработки Анасора (Anasora) располагается высоко в горах в регионе Гуджи (Guji). Изначально это была ферма размером 150 га, расположенная неподалеку от реки Туро (Turo), на которой производили только натуральный кофе, но в 2018 году на ее территории была построена станция для производства мытого кофе. Владельцем станции является Израель Дегфа (Isrel Degfa), в собственности у которого еще несколько ферм и 20 станций обработки в разных регионах. Помимо того, что Израэль производит кофе высокого качества, он также помогает местным сообществам, так например, он построил начальные школы рядом со всеми своими фермами и станциями, чтобы у детей фермеров была возможность посещать их и не тратить на это по три часа каждый день. Созревание ягод в этом регионе происходит очень медленно, что в дальнейшем способствует формированию сложного букета и кислотности в чашке. Все процессы на станции тщательно контролируется, чтобы обеспечить высокое качество зерна, 85% из которого является категории Спешиэлти. Перед обработкой ягоды водой делят по плотности на два грейда, после чего их по отдельности депульпируют и обрабатывают. Ферментация может занимать от 36 до 72 часов, так как на такой высоте обычно низкие температуры и процесс ферментации занимает больше времени. После этого зерно промывают и еще раз сортируют плотности, после чего его замачивают на 6 – 12 часов в чистой воде. Сушка на африканских кроватках занимает от 12 до 15 дней',
        uniq: 'Анасора',
        tags: 'tut tag',
        region: 'Оромия',
        type: 'Эспрессо',
        acidity: 'tut kislota',
        process: 'needfix',
        image: 'ethiopiaanasora.jpg',
      },
      {
        title: 'Колумбия Сол Насиенте',
        description: 'Сол Насиенте - молодой кооператив. Благодаря поддержке общества и государства он стал процветать и производить вкуснейший кофе. Фермеры получают образовательные материалы, участвуют в семинарах и лекциях. Плантации расположены на северном склоне Сьерра-Невада-де-Санта-Марта в зоне ветров, рядом с самой высокой снежной вершиной Колумбии, и всего в 10 км от побережья Карибского моря. Уникальный микроклимат создает кофе со сложным ярким ароматом и вкусом спелых фруктов и шоколада. Этот лот традиционной мытой обработки разновидностей катурра и кастильо. Первый обладает более яркими вкусовыми показателями, а второй более устойчив к болезням и климатическим перепадам - классическое колумбийское сочетание. Местность отличается резким уклоном гор, поэтому ягоды доставляют при помощи труб. Сначала удаляются флотеры, после этого ягода через депульпатор попадает в ферментационный танк. Ферментация в воде - до 24 часов. Парчмент промывают в специальных каналах, смывая клейковину. Сушка проходит на патио от 15 до 20 дней. ',
        uniq: 'Сол Насиенте',
        tags: 'tut tag',
        region: 'Колумбия',
        type: 'Фильтр',
        acidity: 'умеренная, преимущественно яблочная',
        process: 'Мытый',
        image: 'ColumbiaSolNasiente.png',
      },
      {
        title: 'Колумбия Буена Виста',
        description: 'Производство кофе в семье Лозано это традиция, которая пронизывает собою поколения. У Рафаэля никогда не было сомнений, что кофе станет делом его жизни, поэтому с детских лет он внимательно впитывал информацию о производстве от своего отца. Десять лет назад Рафаэлю было доверено управление фермой, и он с энтузиазмом взялся за дело. Он уверен, что работа с кофе это постоянное изучение и поиск, и в этом принципы его работы полностью схожи с нашими. Поиск заставляет его проводить эксперименты с обработкой, а также участвовать в образовательных семинарах и лекциях. Благодаря тому, что Рафаэль гибок в плане подбора ферментации и обработки, его кофе ежегоднопоказывает отличные результаты.Этот лот традиционной мытой обработки. У Рафаэля всего два гектара кофейных деревьев, поэтому к сбору урожая он относится очень внимательно. Ягоды собирают обычно 1-2 раза в неделю по степени зрелости. После сбора их дополнительно перебирают, удаляют ветки и листья. После этого ягоды проходят через депульпатор, теряя кожуру и часть мякоти. Затем Рафаэль укладывает парчмент в танки, где проходит ферментация. Взависимости от сорта и климатических условий во время урожая, Рафаэль варьирует время ферментации - от 14 до 30 часов. Конкретно этот лот пролежал в танках около 18 часов, что позволило поймать уверенный баланс между терруаром и ферментацией. После этого парчмент промыли в специальных каналах, и выложили на столы для сушки, которая заняла 15 дней.',
        uniq: 'Буена Виста',
        tags: 'tut tag',
        region: 'Колумбия',
        type: 'Фильтр',
        acidity: 'яркая яблочная, лимонная',
        process: 'Мытый',
        image: '5c6d6a993d5116525054cf8589dfaf9d.png',
      },
      {
        title: 'Танзания Умоджа Улулу',
        description: 'В ваших руках первый в мире кофе экспериментальной обработки из Танзании! Обладая опытом работы с кофе в Колумбии и Эфиопии, мы перенесли его на Танзанию. Этот лот был обработан экспериментальным, гидро-натуральным способом. Цель заключалась в том, чтобы совместить элементы натуральной и мытой обработки. На фото - Барики, менеджер станции обработки Умоджа Улулу, он помог нам с контролем качества обработки. Кофе получился с яркой цитрусовой кислотностью, высокой сладостью, читаемым букетом, который отлично балансирует с алкогольными оттенками.',
        uniq: 'Умоджа Улулу',
        tags: 'tut tag',
        region: 'Мбея',
        type: 'Фильтр',
        acidity: 'ниже среднего',
        process: 'гидро-натуральная',
        image: 'TanzaniaUmodjaUlulu.png',
      },
      {
        title: 'Эфиопия Керреча',
        description: 'Станция обработки Мокониса находится в окрестностях деревни Керреча, откуда и поступает ягода. Кооперативом управляет наш старый партнер Исраэль Дегфа, который известен своим подходом к производству. Он всегда ориентирован на повышение качества кофе на всех станциях обработки, входящих в кооператив. Обычно размер фермы не превышает 1 га, а в некоторых случаях и того меньше. Некоторые фермеры весь год ухаживают за кофейным деревом, которое в результате даст не больше 200 гр зеленого зерна. Исраэль Дегфа активно развивает кофейное сообщество: в случае дополнительной прибыли от сверхудачных лотов, членам кооператива выплачиваются премии. Он также участвует в строительстве школ, детских садов и другой социально-значимой инфраструктуры. Перед вами лот натуральной обработки. В течении дня фермеры сдают спелые ягоды на станцию переработки. После приемки, ягоды перебирают вручную и  удаляют недозревшие и переспевшие плоды. После этого их укладывают на столы для сушки, и в течение всего процесса несколько раз в день перемешивают. Это необходимо для того, чтобы ягоды не закисали и сушились в одинаковых условиях. Кроме того, во время перемешивания работники станции также дополнительно перебирают ягоды. Время сушки зависит от погодных условий, но обычно она занимает от 9 до 12 дней.',
        uniq: 'Керреча',
        tags: 'tut tag',
        region: 'Керреча',
        type: 'Эспрессо',
        acidity: 'средняя, винная и цитрусовая',
        process: 'натуральная',
        image: 'ethyopiaKerrechaa.png',
      },
      {
        title: 'Колумбия Таби Лэнд',
        description: 'Новый сорт в нашем ассортименте, к тому же сразу натуральной обработки. Не так часто можно встретить в нашей стране «таби», и мы рады, что являемся одними из немногих, кто сумел найти достойный кофе этого сорта. Все это стало возможным благодаря стараниям Анджело Сосы, и его ферме, которую он именовал в честь данного сорта. В дословном переводе название фермы означает «Земля таби». Анджело купил ферму около 20 лет назад, и как он сам признается, изначально его впечатлил вид на окрестности, который открывается прямо с плантаций. Уже потом, начав работу с кофе, фермер осознал, какой богатый терруар достался ему в наследство, и начал серьезно работать над качеством кофе, чтобы рассказать всему миру о чудесном микроклимате окрестностей. Этот лот натуральной обработки, что не так привычно для Колумбии. После сборки, ягоды отсортировали по качеству, удалив недозревшие и перезревшие, а также ветки и листья. После этого ягоды уложили на патио и столы для сушки тонким слоем, чтобы не допустить закисания и образования плесени. С этой же целью в первые несколько дней ягоды постоянно переворачивали, а после они сушились уже более толстым слоем. Общее время сушки лота составило 16 дней.',
        uniq: 'Таби Лэнд',
        tags: 'tut tag',
        region: 'Колумбия',
        type: 'Фильтр',
        acidity: 'тёмных ягод и красного вина',
        process: 'натуральная',
        image: 'ColumbiaTabyLand.png',
      },
      {
        title: 'Танзания Умоджа Улулу',
        description: 'В ваших руках первый в мире кофе экспериментальной обработки из Танзании! Обладая опытом работы с кофе в Колумбии и Эфиопии, мы перенесли его на Танзанию. Этот лот был обработан классическим мытым способом, который на удивление не используется в Танзании! У ягод убрали мякоть, зерна в парчменте поместили на ночь в воду для удаления клейковины, просушили, убрали парчмент, отправили в Россию. На фото - Барики, менеджер станции обработки Умоджа Улулу, он помог нам с контролем качества обработки. В итоге кофе обладает мощной кислотностью Кении и ягодно-тропический профилем Эфиопии - звучит вкусно. ',
        uniq: 'Умоджа Улулу',
        tags: 'tut tag',
        region: 'Мбея',
        type: 'Фильтр',
        acidity: 'средняя',
        process: 'классическая мытая обработка',
        image: 'TanzaniaUmodjaUlulu.png',
      },
      {
        title: 'Эфиопия Банко Готете',
        description: 'Станция обработки Банко Готете принадлежит нашему партнеру Султану Легессе. В одну из поездок к Султану мы посетили близлежащие деревни, где почти каждая семья ежедневно вручную собирает и сдает ягоды на станцию. Старейшина  местного поселения рассказал, что о вкусе кофе из этих мест слагались легенды еще до того, как местные земли начали называть Эфиопией. Причина - уникальный ландшафт и многочисленные маленькие речки и ручейки.Обычно в ягоде созревают два зеленых зерна, но иногда развивается одно семя внутри ягоды, которое принимает форму двух сросшихся зерен. Такой тип кофейного зерна называют Пиберри (англ. peaberry, сокр. PB). Пиберри можно встретить на кофейном дереве любого сорта и региона произрастания, но не более 2-10% от общего объема урожая с одной плантации. Во время урожая на станцию поступает до 50 тонн спелых ягод ежедневно. Кофе делят по качеству в депульпаторе,  ферментируют 36 часов, промывают в каналах с водой, сушат 8-10 дней на африканских кроватях, перемешивая в течение дня. Перед экспортом кофе еще раз перебирают вручную и удаляют дефекты.',
        uniq: 'Банко Готете',
        tags: 'tut tag',
        region: 'asdasda',
        type: 'Фильтр',
        acidity: 'средняя, яблочная и цитрусовая',
        process: 'needfix',
        image: 'ethyopiaBankoGottete.jpg',
      },
      {
        title: 'Колумбия Апонте',
        description: 'В 2016 году колумбийский департамент Нариньо пострадал от аномальной трещины в земной коре, которая разрушила деревню Апонте. С тех пор жители начали выращивать кофе, чтобы улучшить своё состояние и вернуться к нормальной жизни. Данный сорт обработан мытым способом: ягоды собрали, убрали зеленые переспевшие и мусор. У оставшихся спелых ягод убрали мякоть и поместили на 20 часов в воду для ферментации. Далее кофе промыли, просушили, отгрузили.',
        uniq: 'Апонте',
        tags: 'tut tag',
        region: 'Нариньо',
        type: 'Фильтр',
        acidity: 'средняя',
        process: 'Мытый',
        image: 'ColumbiaAponte.png',
      },
      {
        title: 'Кения Мугага Гатина',
        description: 'Гатина - это станция переработки, которая входит в кооператив Мугага. Кофе на неё поставляют фермеры, у которых в хозяйстве не более 250 деревьев. Кооператив заинтересован в высоком качестве кофе, поэтому работа происходит по системе Coffee Management Services Ltd: фермеры повышают производительность труда, обучаются новым техникам ведения хозяйства, получают доступ к необходимым в работе ресурсам. Кофе обработан классическим для Кении мытым способом. Вкус оправдывает ожидания любителей ярких кислот, радует ярким переливающимся фруктовым букетом.',
        uniq: 'Мугага Гатина',
        tags: 'tut tag',
        region: 'Мугага',
        type: 'Фильтр',
        acidity: 'средняя',
        process: 'Мытый',
        image: 'KenyaMugagaGatina.png',
      },
      {
        title: 'Бразилия Альта Виста',
        description: 'Робсон Вилелья - бывший дантист, круто изменивший жизнь, купив участок земли для выращивания кофе.С самого начала карьеры фермером Робсон думал не только об объем производимого кофе, но и качестве, регулярно оценивая кофе в своей лаборатории, а в 2007 году отправил образцы на «Cup of excellence» и прошел в финал. Робсон живет в поиске новых знаний, путешествует по другим кофейным странам, чтобы расширить познания и сделать свой кофе вкуснее. На зубок кофе прекрасен, но лучше приготовить.',
        uniq: 'Альта Виста',
        tags: 'tut tag',
        region: 'Бразилия',
        type: 'Фильтр',
        acidity: 'средняя',
        process: 'Натуральная',
        image: 'BrazilAltaVista.png',
      },
      {
        title: 'Колумбия Декаф эль Карамель',
        description: 'Сладкий декаф - звучит как парадокс и миф, но у нас получилось найти такой! Этот кофе содержит менее 0,1% кофеина, по сравнению с исходными 1-1,5%. Декофеинизирование происходило при помощи этилацетата, который образуется во время ферментации сахарного тростника, поэтому этот способ декофеинизирования называется натуральным. Зеленый кофе предварительно распаривают для улучшения пористости, и после помещают в этилацетат, который забирает кофеин. После кофе повторно выпаривают для удаления растворителя, и высушивают до экспортных 12-13 процентов влажности, и отправляют к нам, чтобы попасть к вам.',
        uniq: 'Декаф',
        tags: 'tut tag',
        region: 'Колумбия',
        type: 'Эспрессо',
        acidity: 'средняя',
        process: 'Мытый',
        image: 'ColumbiaDecafElCaramel.png',
      },
      {
        title: 'Бразилия Кармо Де Минас',
        description: 'Пожалуй, это самая сладкая Бразилия, которую нам удалось найти! Сладость в Бразилии Кармо де Минас формируют три фактора: разновидность желтый бурбон, маленький размер зерна и натуральная обработка. Наш опыт работы с кофе из Эфиопии показывает, что самым сладким вкусом характеризуются маленькие ягоды. Созревая на одной ветке, маленькая ягода быстрее получает большее количество сахаров, который образуется, когда ягода заизюмливается на ветке. Так, три фактора, работая вместе, дают сладкую Бразилию.',
        uniq: 'Кармо Де',
        tags: 'tut tag',
        region: 'Кармо Де Минас',
        type: 'Фильтр',
        acidity: 'низкая',
        process: 'Натуральная',
        image: 'BrasilKarmoDeMinasFilter.png',
      },
      {
        title: 'Бразилия Фазенда Чапада',
        description: 'Маркус Карвальо - бывший бразильский футболист. Но, незадолго до окончания карьеры в спорте, его прекрасная жена унаследовала кофейную ферму. Так, одним движением ноги и или руки, Маркус занялся агрокультурой. Данный сорт в вашихруках натуральной обработки: собрали, промыли, удалили неспелые и перезрелые ягоды, и с этого момента начинается «магия». Отобранные ягоды отправляется в бочки для анаэробной ферментации на 7 дней, а дальше кофе сушится на африканских кроватях. Итоговый вкус кофе показывает, что Маркус переобулся успешно.',
        uniq: 'Фазенда',
        tags: 'tut tag',
        region: 'Кармо Де Минас',
        type: 'Фильтр',
        acidity: 'средняя',
        process: 'Натуральная',
        image: 'BrasilFazendaChapada.png',
      },
    ]);
    disconnect();
  }).catch((err) => {
    console.error(err);
  });
}

// coffeeSeeder();
