// Set publish date to current date
document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('publish-date');
    if (dateElement) {
        const options = { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        dateElement.textContent = new Date().toLocaleDateString('en-US', options);
    }
});

// Reaction counter
const reactions = {
    laugh: 0,
    wow: 0,
    heart: 0
};

function react(type) {
    reactions[type]++;
    document.getElementById(`${type}-count`).textContent = reactions[type];
}

// Share functionality
function shareArticle() {
    alert('This totally real news article has been shared! (Not really, but imagine it was)');
}

// Poll functionality
const pollResults = {
    "Abducted by aliens and cloned": 0,
    "Just needed a break from TikTok": 0,
    "The Pixel's bad camera was a cover-up": 0
};

function submitPoll() {
    const form = document.getElementById('poll-form');
    const selectedOption = form.opinion.value;
    
    if (selectedOption) {
        // Map the form values to the full text
        const optionTexts = {
            "Abducted": "Abducted by aliens and cloned",
            "Break": "Just needed a break from TikTok",
            "Coverup": "The Pixel's bad camera was a cover-up"
        };
        
        pollResults[optionTexts[selectedOption]]++;
        
        const totalVotes = Object.values(pollResults).reduce((a, b) => a + b, 0);
        
        const resultsHTML = Object.entries(pollResults).map(([option, votes]) => {
            const percentage = (votes / totalVotes * 100).toFixed(1);
            return `
                <div class="poll-result-item">
                    <div class="poll-label">${option} (${votes} votes)</div>
                    <div class="poll-bar-container">
                        <div class="poll-bar" style="width: ${percentage}%">
                            <span class="poll-percentage">${percentage}%</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        const resultDiv = document.getElementById('poll-result');
        resultDiv.innerHTML = `
            <h4>Poll Results</h4>
            <div class="poll-results-container">
                ${resultsHTML}
            </div>
            <p class="total-votes">Total votes: ${totalVotes}</p>
        `;
        
        resultDiv.style.display = 'block';
        form.style.display = 'none';
    } else {
        alert('Please select an option before submitting.');
    }
}