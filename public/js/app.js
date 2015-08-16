/* public/js/app.js */

window.onload = function() {

    var converter = new showdown.Converter();
    var pad = document.getElementById('pad');
    var markdownArea = document.getElementById('markdown');

    var previousMarkdownValue;

    // Make the tab act like a tab
    pad.addEventListener('keydown', function(e) {
    	// Tab was pressed
    	if(e.keyCode === 9) {
    		// get the caret position/selection
    		var start = this.selectionStart;
    		var end  = this.selectionEnd;

    		var target = e.target;
    		var value = target.value;

    		// Set the textarea value to: text before caret + tab + text after caret
    		target.value = value.substring(0, start) + '\t' + value.substring(end);

    		// put caret at right position again (add one for the tab)
    		this.selectionStart = this.selectionEnd = start + 1;

    		//prevent the focus lose
    		e.preventDefault();
    	}
    });

    var convertTextAreaToMarkdown = function() {
        var markdownText = pad.value;
        previousMarkdownValue = markdownText;
        html = converter.makeHtml(markdownText);
        markdownArea.innerHTML = html;
    };

    var didChangeOccur = function() {
        if (previousMarkdownValue != pad.value) {
            return true;
        }
        return false;
    };

    setInterval(function() {
        if (didChangeOccur()) {
            convertTextAreaToMarkdown();
        }
    }, 1000);

    pad.addEventListener('input', convertTextAreaToMarkdown);

    var documentName = document.location.pathname.substring(1);

    sharejs.open(documentName, 'text', function(error, doc) {
        doc.attach_textarea(pad);
        convertTextAreaToMarkdown();
    });

    convertTextAreaToMarkdown();

};