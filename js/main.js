// Format the date in a newspaper style
function formatDate() {
    const options = { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date().toLocaleDateString('en-US', options);
}

// Set the date when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('publish-date');
    if (dateElement) {
        dateElement.textContent = formatDate();
    }
});

const pollResults = {
    believable: 0,
    funny: 0,
    ridiculous: 0
};

function submitPoll() {
    const form = document.getElementById('poll-form');
    const selectedOption = form.opinion.value;
    
    if (selectedOption) {
        pollResults[selectedOption]++;
        
        const totalVotes = Object.values(pollResults).reduce((a, b) => a + b, 0);
        
        const resultsHTML = Object.entries(pollResults).map(([option, votes]) => {
            const percentage = (votes / totalVotes * 100).toFixed(1);
            return `
                <div class="poll-result-item">
                    <div class="poll-label">${option.charAt(0).toUpperCase() + option.slice(1)}: ${votes} votes</div>
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

function shareArticle() {
    alert('This totally real news article has been shared! (Not really, but imagine it was)');
}