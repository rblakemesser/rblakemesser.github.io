// define template arrays
var dearArray = [
	'Dear editors,',
	'To those guys at $journal,',
	'To whom it may concern,',
	'Dear editors of Tin House,',
	'Dear editors of $journal (ha ha, j/k, I know it\'s unpaid interns who actually read this),',
	'Hey,',
	'Hiiiiiiiiiiiiiiiiiii!!!',
	'Dear Mr. McSweeney,',
];

var titleArray = [
	'Thank you for reading \"$title.\" Your submissions guidelines say you don\'t publish erotica, but this is really literary, so.',
	'Thank you for reading \"$title.\" Your submissions guidelines say you don\'t publish genre, but I promise you have never read anything like this before!',
	'Thank you for reading \"$title,\" my 300K-word novel in progress. Please feel free to choose any portion to excerpt for publication.',
	'Thank you for reading \"$title,\" my novel-in-flash-fictions in progress. Please choose any three of the 87 pieces in the collection to publish. I would like final say in the order in which they are presented.',
	'Thank you for reading \"$title,\" my 40,000-word WIP about one family vacation that goes wackily awry! I heard you are a flash fiction site but I really admire you and your aesthetic and hope that we can find a way to work together.',
	'I don\'t know if you\'re open to submissions right now but I thought I would send anyway! Heh heh!',
	'Thank you for reading \"$title.\" It\'s been rejected by 35 other magazines so far but maybe you\'ll be the ones to finally appreciate it.',
	'I am sending you \"$title.\" I think it is fair to say that it is epitomatic of the voice of my generation.',
	'Thank you for reading \"$title.\" Don’t worry! It’s okay if you don\'t like it! LOL!',
	'I don\'t know if you remember me. I saw you from across the room at AWP. Our eyes met for a second, and I felt this spark--like you truly saw me, right into my soul. I was too shy to approach, and when I came back to your table the next day, you were gone, but I couldn\'t forget your eyes. It\'s taken me months to work up the nerve to send you \"$title.\" Just thinking about you reading it fills my stomach with butterflies. It\'s 4,000 words over your stated word count limit, but with a connection like ours, I felt confident you wouldn\'t turn me away',
	'Thank you for reading \"$title.\" It was inspired by a trip that my family took to Africa when I was thirteen. The main character is actually a symbol for moral poverty, and the scene where he looks into the mirror is supposed to represent the failure of the U.N. to adequately protect developing countries from ecological destruction. It is 11,000 words.',
	'Thank you for reading \"$title.\" I know your magazine supports work by diverse writers, and although I am a white, straight cisgendered writer, you\'ll find that there are many well-written diverse characters in this story, which is written from the POV of a deaf, transgendered, half-Latina, half-Japanese Jewish schoolgirl with Asperger\'s and nymphomania.'
];

var bioArray = [
	'My bio: I was born in Oklahoma, the second of three children. My mother always loved my brothers the best, which encouraged me to strive for perfection in all aspects of my life, which you will probably notice in my writing. I was first clarinet in my high school band and also in my college, where I double-majored in economics and history. I currently live in the Chicago area with my family and our three dogs, two cats and eleven parakeets, who are named Jimbo, Rambo, T-Rex, Augustin, Patchouli, Tweet, Tweeters, Tweetums, Tweetie, Tweetie, Tweets, Tweetsie, Tweetily, Tweeter, Tweetops, and Nipple. If accepted, this will be my first publication.',
	'Bio: I don\'t share my bio with journals that don\'t publish me, so just accept my piece if you want to know more.',
	'My bio: I am an ENFP and a Scorpio. I have no tan lines and am *very* flexible (no yoga! ;)) My work has been published or is forthcoming from Blah de Blah, Broken Toenail Press, Cherries Jubilee, and the Benedict Cumberbatch Review.',
	'My bio: I believe in the soul of the ocean, and I commune with the singing of trees. The sky is my broken-dreamed masterpiece. Where will you be when the sweet cream flood of the heavens split open? I will be here... with you. This will be my first publication.',
	'My bio: My grandfather came to this country in 1941 after his father, a Russian Jew, accidentally killed a Cossack and had to flee in fear of retribution. He met my grandmother while working on a riverboat in St. Louis. It is this grandmother, Granny Smith (her real name!) who encouraged me to pursue my love of writing. I wrote my first book when I was six years old. It was about my dog, Grover. Since then, I won a writing contest in 7th grade for the best \"My Summer\" essay, and took several writing classes in college with esteemed local writers Rand Greene and Gwynnyfer Phillips. My interests include writing (of course!), Dostoevsky, and military documentaries. This will be my first publication.',
	'Bio: I must say that I never quite no what to say when somebody asks me to describe myself. For what, precisely, are they seeking? If I must say a bit about myself, I will confess that I am a great reader of Wallace, Hemingway, Mailer, Carver, Cheever, Updike, Roth, and the other proverbial greats. In my spare time I contemplate the great philosophers, and am currently endeavoring to undertake a study of the Russian language, and to seek out the company of those who are my intellectual equals, for our time on this planet is a lonely one in the bleak shadow of solitude. This will be my first publication.',
	'Bio: Writing is the passion and torment of my soul. Who can free me from this pain?? (My work has been published or is forthcoming from Blah de Blah, Broken Toenail Press, and the Benedict Cumberbatch Review.)',
	'My bio: My work has been published or is forthcoming from Blah de Blah, Broken Toenail Press, Cherries Jubilee, 1874, the Shoal Creek Review, If This Were An Adventure Wouldn’t We Have Met the Villain Already Press, the Benedict Cumberbatch Review, the Washington Business Insider Review blog, Shave and a Haircut Aesthetician’s Daily Newsletter, Carpal Tunnel Quarterly, Science, the Lampshade Manufacturers\' Association Triannual Report, and the Alzheimer\'s Association of America brochure, and has appeared or is forthcoming in the anthologies Hurry Up and Wait (Erotic Military Poetry), Hang Down Your Head Tom Dooley (Comic Stories About Death in the Forms of Songs), You Like To Move It Move It (Experimental Flash Fiction About Working For Moving Companies), and Give The Dog A Bone (Self-Explanatory). I also write technical documentation for label-making company Dymo. My work has been nominated for the Pushcart Prize.'
];

var conArray = [
	'So seriously, publish this or I\'ll hunt you down and kill you. JUST KIDDING!!! (You\'ll understand this once you\'ve read my submission.)',
	'This is a simultaneous submission that is currently out at 45 other places. Of these, you are ranked number 8 or so, so if you act fast, chances are good that you\'ll actually get to publish it.',
	'I hope you like this, but I understand if you don\'t. Nobody else does. (j/k) (kind of)',
	'I know you accept simultaneous publications, but I am pretty sure you’re going to publish this so I only sent it to you. yr welcome!',
	'Please respond. Please? I don\'t know how much longer I can take this. LOL',
	'I also have a poetry cycle about working at Crate & Barrel and an erotic story/memoir about an affair a college TA had with a foreign exchange coed and if either of those sound better let me know and I\'ll send them to you instead.',
	'Thank you for reading. I heard that editors make better connections with writers they feel like they know, so please find these attached photos of me and my dog. I am the one on the left.',
	'In conclusion, a joke: what was David Foster Wallace\'s favorite kind of sandwich? Give up? Publish me and I\'ll tell you the answer!',
	'It’s totally cool if you don’t like this, lol. But like my uncle says, you gotta play to win!!',
	'If you don\'t publish this, your loss.',
	'If you don\'t publish this, you\'re a huge idiot. Seriously.',
	'I hope you like this. If you\'re on the fence, give me a call and let me talk you into it. I\'m VERY persuasive.',
	'Thanks for reading. My girlfriend likes to send her submissions while wearing her lucky underwear, but I don\'t have a pair of lucky underwear, so…. ;)'
];

var salArray = [
	'Love,',
	'You da bomb,',
	'Eagerly(!!),'
]

var getRandom = function(myArray) {
	return Math.floor(Math.random() * myArray.length);
}

// render the cover letter using inputs from the form
var renderTemplate = function($journal, journalIdx, $title, titleIdx, $name, bioIdx, conIdx, salIdx){

	if ($journal.val() === "") {
		alert('Please enter journal name.');
		return false;
	}

	if ($title.val() === "") {
		alert('Please enter the title of your work.');
		return false;
	}

	if ($name.val() === "") {
		alert('Please enter your name.');
		return false;
	}

	var $renderedtemplate = $('#renderedtemplate');

	// render the journal name into a random template 
	// from the "dear" section
	var randDearTpl = dearArray[journalIdx];
	var renderedDear = randDearTpl.replace('$journal', $journal.val());

	// render the title into the appropriate template
	// and create a variable holding the rendered data
	var randTitleTpl = titleArray[titleIdx];
	var renderedTitle = randTitleTpl.replace('$title', $title.val());

	// render the bio into the appropriate template
	// and create a variable holding the rendered data
	var renderedBio = bioArray[bioIdx];

	// render the conclusion into the appropriate template
	// and create a variable holding the rendered data
	var randConTpl = conArray[conIdx];

	// render the conclusion into the appropriate template
	// and create a variable holding the rendered data
	var randSalTpl = salArray[salIdx];

	// put all the rendered pieces together
	//var header = '<h2>Here is your cover letter:</h2><br/>';
	var newContent ='<p>' + renderedDear + '</p>' + '<p>' + renderedTitle + '<p>' + renderedBio + '</p>'
	+ '<p>' + randConTpl + '</p>' + '<p>' + randSalTpl + '</p>' + '<p>' + $name.val() + '</p>' 
	+ '<p><h4>Not quite what you were looking for? Enter new information, or just click the button again for a new letter.</h4></p>'
	+ '<p><h5>Proud of your letter? Copy and paste your url to share your results!</h5></p><br/>'
	;
	$renderedtemplate.html(newContent);

}

// handle form submit
var formhandler = function(){
	var $butt = $('#buttbutton');
	$butt.on('click', function(e){

		$('#journal-idx').val(getRandom(dearArray).toString());
		$('#title-idx').val(getRandom(titleArray).toString());
		$('#bio-idx').val(getRandom(bioArray).toString());
		$('#con-idx').val(getRandom(conArray).toString());
		$('#sal-idx').val(getRandom(salArray).toString());

	});
}

function getURLParameter(name) {
	return decodeURIComponent((
		new RegExp(
			'[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)'
		).exec(location.search)||[,""]
	)[1].replace(/\+/g, '%20'))||null;
}

var paramIngester = function() {
	formhandler();

	var $journal = $('#journal');
	var $title = $('#title');
	var $name = $('#name');
	var $nameIdx = $('#name-idx');
	var $journalIdx = $('#journal-idx');
	var $titleIdx = $('#title-idx');
	var $bioIdx = $('#bio-idx');
	var $conIdx = $('#con-idx');
	var $salIdx = $('#sal-idx');

	$journal.val(getURLParameter('journal'));
	$title.val(getURLParameter('title'));
	$name.val(getURLParameter('name'));

	$nameIdx.val(getURLParameter('name-idx'));
	$journalIdx.val(getURLParameter('journal-idx'));
	$titleIdx.val(getURLParameter('title-idx'));

	$bioIdx.val(getURLParameter('bio-idx'));
	$conIdx.val(getURLParameter('con-idx'));
	$salIdx.val(getURLParameter('sal-idx'));

	if ($journal.val()) {
		renderTemplate(
			$journal,
			$journalIdx.val(),
			$title,
			$titleIdx.val(),
			$name,
			$bioIdx.val(),
			$conIdx.val(),
			$salIdx.val()
		);
	}
}

// attach form handling after the window loads
window.onload = paramIngester;
