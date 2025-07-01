const lessonContentDivs = {
    'lesson-html-intro': document.getElementById('lesson-html-intro'),
    'lesson-css-intro': document.getElementById('lesson-css-intro'),
    'lesson-js-intro': document.getElementById('lesson-js-intro')
};
const staticPageDivs = {
    'page-privacy-policy': document.getElementById('page-privacy-policy'),
    'page-terms-of-service': document.getElementById('page-terms-of-service')
};

const mainNavLinks = document.getElementById('main-nav-links');
const langEnBtn = document.getElementById('lang-en-btn');
const langHiBtn = document.getElementById('lang-hi-btn');
const offlineStatusSpan = document.getElementById('offline-status');

const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelector('.mobile-nav-links');
const mobileLangEnBtn = document.getElementById('mobile-lang-en-btn');
const mobileLangHiBtn = document.getElementById('mobile-lang-hi-btn');
const footerLinks = document.querySelector('.footer-links');

// Modal elements
const offlineModalOverlay = document.getElementById('offlineModalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const modalCloseBtn = document.getElementById('modalCloseBtn');


let currentLanguage = localStorage.getItem('tutorLang') || 'en';
let currentPageId = localStorage.getItem('tutorPage') || 'lesson-html-intro';

// --- Lesson Content Data ---
const lessons = {
    'en': {
        'html-intro': {
            title: 'Introduction to HTML',
            content: `
                <h3>What is HTML?</h3>
                <p>HTML stands for <strong>HyperText Markup Language</strong>. It is the standard markup language for creating web pages and web applications. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.</p>
                <p>Think of HTML as the skeleton of a webpage. It defines the content and its basic structure, like headings, paragraphs, images, and links.</p>

                <h3>Basic HTML Document Structure</h3>
                <p>Every HTML document has a basic structure:</p>
                <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Your content goes here --&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
                <ul>
                    <li><code>&lt;!DOCTYPE html&gt;</code>: Declares the document type.</li>
                    <li><code>&lt;html&gt;</code>: The root element of an HTML page.</li>
                    <li><code>&lt;head&gt;</code>: Contains meta-information about the HTML document (not visible on the page).</li>
                    <li><code>&lt;title&gt;</code>: Specifies a title for the HTML page (shown in the browser's title bar or tab).</li>
                    <li><code>&lt;body&gt;</code>: Contains the visible page content.</li>
                </ul>

                <h3>Common HTML Tags</h3>
                <p>HTML uses "tags" to mark up elements. Here are some common ones:</p>
                <ul>
                    <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: Headings (h1 is the largest, h6 is the smallest).</li>
                    <li><code>&lt;p&gt;</code>: Paragraph.</li>
                    <li><code>&lt;a&gt;</code>: Anchor (for hyperlinks). Example: <code>&lt;a href="https://www.google.com"&gt;Google&lt;/a&gt;</code></li>
                    <li><code>&lt;img&gt;</code>: Image. Example: <code>&lt;img src="image.jpg" alt="Description"&gt;</code></li>
                    <li><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>: Unordered list, Ordered list, List item.</li>
                    <li><code>&lt;div&gt;</code>: Division (a generic container).</li>
                    <li><code>&lt;span&gt;</code>: Inline container for text.</li>
                </ul>
            `
        },
        'css-intro': {
            title: 'Introduction to CSS',
            content: `
                <h3>What is CSS?</h3>
                <p>CSS stands for <strong>Cascading Style Sheets</strong>. It is a stylesheet language used for describing the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML, and XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.</p>
                <p>If HTML is the skeleton, CSS is the skin and clothing. It makes your webpage look good!</p>

                <h3>Ways to Include CSS</h3>
                <p>There are three ways to insert a style sheet:</p>
                <ol>
                    <li><strong>External CSS:</strong> Most common. Styles are defined in a separate <code>.css</code> file and linked to the HTML.
                        <pre>&lt;link rel="stylesheet" href="styles.css"&gt;</pre>
                    </li>
                    <li><strong>Internal CSS:</strong> Styles are defined within a <code>&lt;style&gt;</code> tag in the HTML <code>&lt;head&gt;</code> section.
                        <pre>&lt;style&gt;
    body {
        background-color: lightblue;
    }
&lt;/style&gt;</pre>
                    </li>
                    <li><strong>Inline CSS:</strong> Styles are applied directly to an HTML element using the <code>style</code> attribute.
                        <pre>&lt;h1 style="color:blue;"&gt;This is a Blue Heading&lt;/h1&gt;</pre>
                    </li>
                </ol>

                <h3>CSS Syntax</h3>
                <p>A CSS rule-set consists of a selector and a declaration block:</p>
                <pre>selector {
    property: value;
    property: value;
}</pre>
                <ul>
                    <li><strong>Selector:</strong> Points to the HTML element you want to style (e.g., <code>p</code>, <code>h1</code>, <code>.my-class</code>, <code>#my-id</code>).</li>
                    <li><strong>Declaration Block:</strong> Contains one or more declarations separated by semicolons.</li>
                    <li><strong>Declaration:</strong> Includes a CSS property name (e.g., <code>color</code>, <code>font-size</code>) and a value (e.g., <code>blue</code>, <code>16px</code>), separated by a colon.</li>
                </ul>

                <h3>Common CSS Properties</h3>
                <ul>
                    <li><code>color</code>: Text color.</li>
                    <li><code>background-color</code>: Background color of an element.</li>
                    <li><code>font-size</code>: Size of the text.</li>
                    <li><code>font-family</code>: Font type.</li>
                    <li><code>margin</code>: Space outside the element's border.</li>
                    <li><code>padding</code>: Space inside the element's border.</li>
                    <li><code>width</code>, <code>height</code>: Dimensions of an element.</li>
                </ul>
            `
        },
        'js-intro': {
            title: 'Introduction to JavaScript',
            content: `
                <h3>What is JavaScript?</h3>
                <p>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.</p>
                <p>JavaScript is the programming language of the Web. It is used to add interactivity, dynamic content, and complex features to web pages. If HTML is the structure and CSS is the style, JavaScript is the brain and behavior.</p>

                <h3>How to Include JavaScript</h3>
                <p>JavaScript can be included in an HTML document in two main ways:</p>
                <ol>
                    <li><strong>External JavaScript:</strong> Most common. Code is written in a separate <code>.js</code> file and linked to the HTML. Best practice is to place it just before the closing <code>&lt;/body&gt;</code> tag for performance.
                        <pre>&lt;script src="script.js"&gt;&lt;/script&gt;</pre>
                    </li>
                    <li><strong>Internal JavaScript:</b> Code is written directly within a <code>&lt;script&gt;</code> tag in the HTML document.
                        <pre>&lt;script&gt;
    alert("Hello from JavaScript!");
&lt;/script&gt;</pre>
                    </li>
                </ol>

                <h3>Basic JavaScript Syntax</h3>
                <ul>
                    <li><strong>Statements:</strong> JavaScript code is a series of statements. Each statement typically ends with a semicolon (<code>;</code>), though it's optional in many cases.
                        <pre>let x = 10;
let y = 20;
let sum = x + y;</pre>
                    </li>
                    <li><strong>Comments:</strong> Used to explain code.
                        <pre>// This is a single-line comment

/*
This is a multi-line
comment
*/</pre>
                    </li>
                    <li><strong>Variables:</strong> Used to store data.
                        <pre>var name = "Alice"; // Old way
let age = 30;    // Modern way, block-scoped
const PI = 3.14; // Constant, cannot be re-assigned</pre>
                    </li>
                </ul>

                <h3>Common JavaScript Operations</h3>
                <ul>
                    <li><strong>Output:</strong>
                        <ul>
                            <li><code>console.log("Message");</code>: For debugging, prints to browser console.</li>
                            <li><code>alert("Message");</code>: Displays a pop-up alert box.</li>
                            <li><code>document.getElementById("id").innerHTML = "Text";</code>: Changes HTML content.</li>
                        </ul>
                    </li>
                    <li><strong>Events:</strong> JavaScript can react to user actions (clicks, key presses, etc.).
                        <pre>&lt;button onclick="alert('Button Clicked!')"&gt;Click Me&lt;/button&gt;</pre>
                    </li>
                    <li><strong>Functions:</strong> Blocks of code designed to perform a particular task.
                        <pre>function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("World")); // Output: Hello, World!</pre>
                    </li>
                </ul>
            `
        }
    },
    'hi': {
        'html-intro': {
            title: 'HTML का परिचय',
            content: `
                <h3>HTML क्या है?</h3>
                <p>HTML का पूर्ण रूप <strong>हाइपरटेक्स्ट मार्कअप लैंग्वेज</strong> है। यह वेब पेज और वेब एप्लिकेशन बनाने के लिए एक मानक मार्कअप भाषा है। HTML एक वेब पेज की संरचना को सिमेंटिक रूप से वर्णित करता है और मूल रूप से दस्तावेज़ की उपस्थिति के लिए संकेत शामिल करता है।</p>
                <p>HTML को एक वेबपेज का कंकाल समझें। यह सामग्री और उसकी मूल संरचना को परिभाषित करता है, जैसे शीर्षक, पैराग्राफ, चित्र और लिंक।</p>

                <h3>मूल HTML दस्तावेज़ संरचना</h3>
                <p>प्रत्येक HTML दस्तावेज़ की एक मूल संरचना होती है:</p>
                <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="hi"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;पेज का शीर्षक&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- आपकी सामग्री यहाँ आती है --&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
                <ul>
                    <li><code>&lt;!DOCTYPE html&gt;</code>: दस्तावेज़ प्रकार घोषित करता है।</li>
                    <li><code>&lt;html&gt;</code>: एक HTML पेज का मूल तत्व।</li>
                    <li><code>&lt;head&gt;</code>: HTML दस्तावेज़ के बारे में मेटा-जानकारी शामिल करता है (पेज पर दिखाई नहीं देती)।</li>
                    <li><code>&lt;title&gt;</code>: HTML पेज के लिए एक शीर्षक निर्दिष्ट करता है (ब्राउज़र के शीर्षक बार या टैब में दिखाया गया)।</li>
                    <li><code>&lt;body&gt;</code>: दिखाई देने वाली पेज सामग्री शामिल करता है।</li>
                </ul>

                <h3>सामान्य HTML टैग</h3>
                <p>HTML तत्वों को मार्कअप करने के लिए "टैग" का उपयोग करता है। यहाँ कुछ सामान्य टैग दिए गए हैं:</p>
                <ul>
                    <li><code>&lt;h1&gt;</code> से <code>&lt;h6&gt;</code>: शीर्षक (h1 सबसे बड़ा है, h6 सबसे छोटा है)।</li>
                    <li><code>&lt;p&gt;</code>: पैराग्राफ।</li>
                    <li><code>&lt;a&gt;</code>: एंकर (हाइपरलिंक के लिए)। उदाहरण: <code>&lt;a href="https://www.google.com"&gt;गूगल&lt;/a&gt;</code></li>
                    <li><code>&lt;img&gt;</code>: छवि। उदाहरण: <code>&lt;img src="image.jpg" alt="विवरण"&gt;</code></li>
                    <li><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>: अनऑर्डर की गई सूची, ऑर्डर की गई सूची, सूची आइटम।</li>
                    <li><code>&lt;div&gt;</code>: डिवीजन (एक सामान्य कंटेनर)।</li>
                    <li><code>&lt;span&gt;</code>: टेक्स्ट के लिए इनलाइन कंटेनर।</li>
                </ul>
            `
        },
        'css-intro': {
            title: 'CSS का परिचय',
            content: `
                <h3>CSS क्या है?</h3>
                <p>CSS का पूर्ण रूप <strong>कैस्केडिंग स्टाइल शीट्स</strong> है। यह HTML या XML (SVG, MathML, और XHTML जैसे XML बोलियों सहित) में लिखे गए दस्तावेज़ की प्रस्तुति का वर्णन करने के लिए उपयोग की जाने वाली एक स्टाइलशीट भाषा है। CSS बताता है कि तत्वों को स्क्रीन पर, कागज पर, भाषण में, या अन्य मीडिया पर कैसे प्रस्तुत किया जाना चाहिए।</p>
                <p>यदि HTML कंकाल है, तो CSS त्वचा और कपड़े हैं। यह आपके वेबपेज को सुंदर बनाता है!</p>

                <h3>CSS शामिल करने के तरीके</h3>
                <p>स्टाइल शीट डालने के तीन तरीके हैं:</p>
                <ol>
                    <li><strong>बाहरी CSS:</strong> सबसे आम। स्टाइल एक अलग <code>.css</code> फ़ाइल में परिभाषित होते हैं और HTML से लिंक होते हैं।
                        <pre>&lt;link rel="stylesheet" href="styles.css"&gt;</pre>
                    </li>
                    <li><strong>आंतरिक CSS:</strong> स्टाइल HTML <code>&lt;head&gt;</code> सेक्शन में <code>&lt;style&gt;</code> टैग के भीतर परिभाषित होते हैं।
                        <pre>&lt;style&gt;
    body {
        background-color: lightblue;
    }
&lt;/style&gt;</pre>
                    </li>
                    <li><strong>इनलाइन CSS:</strong> स्टाइल को <code>style</code> विशेषता का उपयोग करके सीधे एक HTML तत्व पर लागू किया जाता है।
                        <pre>&lt;h1 style="color:blue;"&gt;यह एक नीला शीर्षक है&lt;/h1&gt;</pre>
                    </li>
                </ol>

                <h3>CSS सिंटैक्स</h3>
                <p>एक CSS नियम-सेट में एक सेलेक्टर और एक डिक्लेरेशन ब्लॉक होता है:</p>
                <pre>selector {
    property: value;
    property: value;
}</pre>
                <ul>
                    <li><strong>सेलेक्टर:</strong> उस HTML तत्व को इंगित करता है जिसे आप स्टाइल करना चाहते हैं (उदाहरण के लिए, <code>p</code>, <code>h1</code>, <code>.my-class</code>, <code>#my-id</code>)।</li>
                    <li><strong>डिक्लेरेशन ब्लॉक:</strong> एक या अधिक डिक्लेरेशन शामिल करता है जो अर्धविराम से अलग होते हैं।</li>
                    <li><strong>डिक्लेरेशन:</strong> एक CSS प्रॉपर्टी नाम (उदाहरण के लिए, <code>color</code>, <code>font-size</code>) और एक मान (उदाहरण के लिए, <code>blue</code>, <code>16px</code>) शामिल करता है, जो एक कोलन से अलग होते हैं।</li>
                </ul>

                <h3>सामान्य CSS प्रॉपर्टीज</h3>
                <ul>
                    <li><code>color</code>: टेक्स्ट का रंग।</li>
                    <li><code>background-color</code>: एक तत्व का बैकग्राउंड रंग।</li>
                    <li><code>font-size</code>: टेक्स्ट का आकार।</li>
                    <li><code>font-family</code>: फ़ॉन्ट प्रकार।</li>
                    <li><code>margin</code>: तत्व की सीमा के बाहर की जगह।</li>
                    <li><code>padding</code>: तत्व की सीमा के अंदर की जगह।</li>
                    <li><code>width</code>, <code>height</code>: एक तत्व के आयाम।</li>
                </ul>
            `
        },
        'js-intro': {
            title: 'JavaScript का परिचय',
            content: `
                <h3>JavaScript क्या है?</h3>
                <p>JavaScript (JS) एक हल्की, इंटरप्रेटेड, या जस्ट-इन-टाइम संकलित प्रोग्रामिंग भाषा है जिसमें फर्स्ट-क्लास फ़ंक्शन होते हैं। जबकि यह वेब पेजों के लिए स्क्रिप्टिंग भाषा के रूप में सबसे अच्छी तरह से जानी जाती है, कई गैर-ब्राउज़र वातावरण भी इसका उपयोग करते हैं, जैसे Node.js, Apache CouchDB और Adobe Acrobat।</p>
                <p>JavaScript वेब की प्रोग्रामिंग भाषा है। इसका उपयोग वेब पेजों में इंटरैक्टिविटी, गतिशील सामग्री और जटिल सुविधाएँ जोड़ने के लिए किया जाता है। यदि HTML संरचना है और CSS स्टाइल है, तो JavaScript मस्तिष्क और व्यवहार है।</p>

                <h3>JavaScript कैसे शामिल करें</h3>
                <p>JavaScript को HTML दस्तावेज़ में दो मुख्य तरीकों से शामिल किया जा सकता है:</p>
                <ol>
                    <li><strong>बाहरी JavaScript:</strong> सबसे आम। कोड एक अलग <code>.js</code> फ़ाइल में लिखा जाता है और HTML से लिंक होता है। बेस्ट प्रैक्टिस है कि इसे समापन <code>&lt;/body&gt;</code> टैग से ठीक पहले रखा जाए ताकि प्रदर्शन अच्छा रहे।
                        <pre>&lt;script src="script.js"&gt;&lt;/script&gt;</pre>
                    </li>
                    <li><strong>आंतरिक JavaScript:</b> कोड सीधे HTML दस्तावेज़ में <code>&lt;script&gt;</code> टैग के भीतर लिखा जाता है।
                        <pre>&lt;script&gt;
    alert("Hello from JavaScript!");
&lt;/script&gt;</pre>
                    </li>
                </ol>

                <h3>Basic JavaScript Syntax</h3>
                <ul>
                    <li><strong>स्टेटमेंट्स:</strong> JavaScript कोड स्टेटमेंट्स की एक श्रृंखला है। प्रत्येक स्टेटमेंट आमतौर पर एक अर्धविराम (<code>;</code>) के साथ समाप्त होता है, हालांकि कई मामलों में यह वैकल्पिक होता है।
                        <pre>let x = 10;
let y = 20;
let sum = x + y;</pre>
                    </li>
                    <li><strong>टिप्पणियाँ (Comments):</strong> कोड समझाने के लिए उपयोग की जाती हैं।
                        <pre>// This is a single-line comment

/*
This is a multi-line
comment
*/</pre>
                    </li>
                    <li><strong>वेरिएबल्स:</strong> डेटा स्टोर करने के लिए उपयोग किए जाते हैं।
                        <pre>var name = "एलिस"; // पुराना तरीका
let age = 30;    // आधुनिक तरीका, ब्लॉक-स्कोपेड
const PI = 3.14; // स्थिरांक, फिर से असाइन नहीं किया जा सकता</pre>
                    </li>
                </ul>

                <h3>सामान्य JavaScript ऑपरेशंस</h3>
                <ul>
                    <li><strong>आउटपुट:</strong>
                        <ul>
                            <li><code>console.log("संदेश");</code>: डिबगिंग के लिए, ब्राउज़र कंसोल पर प्रिंट करता है।</li>
                            <li><code>alert("संदेश");</code>: एक पॉप-अप अलर्ट बॉक्स प्रदर्शित करता है।</li>
                            <li><code>document.getElementById("id").innerHTML = "टेक्स्ट";</code>: HTML सामग्री बदलता है।</li>
                        </ul>
                    </li>
                    <li><strong>इवेंट्स:</strong> JavaScript उपयोगकर्ता क्रियाओं (क्लिक, कुंजी प्रेस, आदि) पर प्रतिक्रिया कर सकता है।
                        <pre>&lt;button onclick="alert('बटन क्लिक किया गया!')"&gt;मुझे क्लिक करें&lt;/button&gt;</pre>
                    </li>
                    <li><strong>फ़ंक्शंस:</strong> एक विशेष कार्य करने के लिए डिज़ाइन किए गए कोड के ब्लॉक।
                        <pre>function greet(name) {
    return "नमस्ते, " + name + "!";
}
console.log(greet("दुनिया")); // आउटपुट: नमस्ते, दुनिया!</pre>
                    </li>
                </ul>
            `
        }
    }
};

// --- Helper function to display messages (if needed elsewhere) ---
function showMessage(msg, type = 'info') {
    // This function is not directly used for the main content display,
    // but can be used for temporary status messages if a dedicated element exists.
    console.log(`Message (${type}): ${msg}`);
}

// --- Function to display any page content (lesson or static page) ---
function displayPage(pageId, event) {
    if (event) event.preventDefault();

    // Hide all content sections first
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Check if it's a lesson
    let contentHtml = '';
    let isLesson = false;
    let lessonTopicId = '';

    if (pageId.startsWith('lesson-')) {
        lessonTopicId = pageId.replace('lesson-', ''); // Extracts 'html-intro', 'css-intro', 'js-intro'
        const lesson = lessons[currentLanguage][lessonTopicId];
        if (lesson) {
            contentHtml = `<h2>${lesson.title}</h2>${lesson.content}`;
            isLesson = true;
        }
    } else if (pageId.startsWith('page-')) {
        // For static pages, content is already in HTML, just make it active
        const staticPageElement = document.getElementById(pageId);
        if (staticPageElement) {
            staticPageElement.classList.add('active');
        } else {
            contentHtml = `<h2>Page Not Found</h2><p>The requested page "${pageId}" could not be found.</p>`;
        }
    }

    // If it's a lesson, populate its div and make it active
    if (isLesson) {
        const lessonDiv = lessonContentDivs[pageId];
        if (lessonDiv) {
            lessonDiv.innerHTML = contentHtml;
            lessonDiv.classList.add('active');
        } else {
            // Fallback if lesson div not found (shouldn't happen with correct IDs)
            document.getElementById('lesson-html-intro').innerHTML = `<h2>Error</h2><p>Could not load lesson content.</p>`;
            document.getElementById('lesson-html-intro').classList.add('active');
        }
    } else if (!pageId.startsWith('page-')) { // If it's not a lesson and not a static page we know
         // Default to HTML intro if page not found
        const defaultLesson = lessons[currentLanguage]['html-intro'];
        lessonContentDivs['lesson-html-intro'].innerHTML = `<h2>${defaultLesson.title}</h2>${defaultLesson.Ccontent}`;
        lessonContentDivs['lesson-html-intro'].classList.add('active');
        currentPageId = 'lesson-html-intro';
    }


    currentPageId = pageId; // Update current page ID
    localStorage.setItem('tutorPage', currentPageId); // Save current page
    updateActiveNavLinks(); // Update active class for nav links

    // Close mobile menu if open
    mobileMenuOverlay.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburgerMenu.classList.remove('open'); // Reset hamburger icon
    hamburgerMenu.textContent = '☰'; // Change icon back to hamburger
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
}

// --- Update active class for navigation links ---
function updateActiveNavLinks() {
    // Select all relevant navigation links (desktop, mobile, footer)
    document.querySelectorAll('.navbar-brand, #main-nav-links a, .mobile-nav-links a, .footer-links a').forEach(link => {
        // Determine the page ID for comparison
        const linkPageId = link.dataset.page; // Use data-page directly
        if (linkPageId === currentPageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Language buttons are handled separately as they toggle language, not page
    langEnBtn.classList.toggle('active', currentLanguage === 'en');
    langHiBtn.classList.toggle('active', currentLanguage === 'hi');
    mobileLangEnBtn.classList.toggle('active', currentLanguage === 'en');
    mobileLangHiBtn.classList.toggle('active', currentLanguage === 'hi');
}

// --- Language Switcher Event Listeners (Desktop & Mobile) ---
langEnBtn.addEventListener('click', () => {
    currentLanguage = 'en';
    localStorage.setItem('tutorLang', 'en');
    displayPage(currentPageId); // Reload current page in new language
});

langHiBtn.addEventListener('click', () => {
    currentLanguage = 'hi';
    localStorage.setItem('tutorLang', 'hi');
    displayPage(currentPageId); // Reload current page in new language
});

mobileLangEnBtn.addEventListener('click', () => {
    currentLanguage = 'en';
    localStorage.setItem('tutorLang', 'en');
    displayPage(currentPageId); // Reload current page in new language
});

mobileLangHiBtn.addEventListener('click', () => {
    currentLanguage = 'hi';
    localStorage.setItem('tutorLang', 'hi');
    displayPage(currentPageId); // Reload current page in new language
});

// --- Main Navigation Event Listeners (Desktop & Mobile) ---
document.querySelectorAll('#main-nav-links a').forEach(link => {
    link.addEventListener('click', (event) => {
        // Use data-page directly as it already contains the full ID (e.g., 'lesson-html-intro')
        displayPage(link.dataset.page, event);
    });
});
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', (event) => {
        // Use data-page directly
        displayPage(link.dataset.page, event);
    });
});

// --- Footer Navigation Event Listeners ---
footerLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        displayPage(link.dataset.page, event);
    });
});

// --- Hamburger/X menu toggle ---
hamburgerMenu.addEventListener('click', () => {
    mobileMenuOverlay.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    hamburgerMenu.classList.toggle('open'); // Toggle 'open' class for rotation
    hamburgerMenu.textContent = hamburgerMenu.classList.contains('open') ? '✕' : '☰'; // Change icon
});

// --- Close mobile menu when clicking outside (on overlay) ---
mobileMenuOverlay.addEventListener('click', (event) => {
    // Check if the click occurred directly on the overlay, not on the menu itself
    if (event.target === mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburgerMenu.classList.remove('open'); // Reset hamburger icon
        hamburgerMenu.textContent = '☰'; // Change icon back
    }
});

// --- Offline Status Updater ---
function updateOfflineStatus() {
    if (navigator.onLine) {
        offlineStatusSpan.innerHTML = '<span class="text-green-400">Online</span>';
    } else {
        offlineStatusSpan.innerHTML = '<span class="text-red-400">Offline (Content available from cache)</span>';
    }
}

// --- Show Offline Modal ---
function showOfflineModal() {
    if (currentLanguage === 'en') {
        modalTitle.textContent = "Please connect to Internet, then turned it off.";
        modalMessage.innerHTML = "This app loads all necessary resources (like styling and fonts) from the internet initially. To ensure full offline functionality, please connect to the internet once to cache these resources. After that, you can use the app offline.";
        modalCloseBtn.textContent = "Got It!";
    } else { // Hindi
        modalTitle.textContent = "कृपया इंटरनेट से कनेक्ट करें, फिर इसे बंद कर दें।";
        modalMessage.innerHTML = "यह ऐप शुरू में सभी आवश्यक संसाधनों (जैसे स्टाइलिंग और फ़ॉन्ट) को इंटरनेट से लोड करता है। पूर्ण ऑफ़लाइन कार्यक्षमता सुनिश्चित करने के लिए, कृपया एक बार इंटरनेट से कनेक्ट करें। उसके बाद, आप अपना इंटरनेट बंद कर सकते हैं।";
        modalCloseBtn.textContent = "समझ गया!";
    }
    offlineModalOverlay.classList.add('active');
}

// --- Close Offline Modal ---
modalCloseBtn.addEventListener('click', () => {
    offlineModalOverlay.classList.remove('active');
});
offlineModalOverlay.addEventListener('click', (event) => {
    if (event.target === offlineModalOverlay) {
        offlineModalOverlay.classList.remove('active');
    }
});


// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    // Dynamically populate lesson content divs
    for (const langKey in lessons) {
        if (lessons.hasOwnProperty(langKey)) {
            for (const topicKey in lessons[langKey]) {
                if (lessons[langKey].hasOwnProperty(topicKey)) {
                    const lessonId = `lesson-${topicKey}`;
                    const lessonDiv = lessonContentDivs[lessonId];
                    if (lessonDiv) {
                        lessonDiv.innerHTML = `<h2>${lessons[currentLanguage][topicKey].title}</h2>${lessons[currentLanguage][topicKey].content}`;
                    }
                }
            }
        }
    }
    // Update navbar brand link's data-page attribute for consistency
    const navbarBrand = document.querySelector('.navbar-brand');
    navbarBrand.dataset.page = 'lesson-html-intro';
    navbarBrand.onclick = (event) => displayPage('lesson-html-intro', event);

    displayPage(currentPageId);
    updateOfflineStatus();

    // PWA: Register Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/serviceworker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    }

    // Show modal if offline on initial load
    if (!navigator.onLine) {
        showOfflineModal();
    }
});

// --- Online/Offline Event Listeners ---
window.addEventListener('online', updateOfflineStatus);
window.addEventListener('offline', updateOfflineStatus);
