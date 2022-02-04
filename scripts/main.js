const viewsContainer = document.querySelector(".pricing-card__views");
const costContainer = document.querySelector(".pricing-card__price");
const rangeInput = document.querySelector(".pricing-card__views-range");
const priceFreqContainer = document.querySelector(".pricing-card__billing-frequency");
const frequencyToggle = document.querySelector("#billing-freq");
const form = document.querySelector(".pricing-card");

// Data & Global Variables
const VIEWS_DATA = [
    {
        pageViews: '10k',
        monthlyCost: 8,
        leftPercentage: 0
    },
    {
        pageViews: '50k',
        monthlyCost: 12,
        leftPercentage: 25
    },
    {
        pageViews: '100k',
        monthlyCost: 16,
        leftPercentage: 50
    },
    {
        pageViews: '500k',
        monthlyCost: 24,
        leftPercentage: 75
    },
    {
        pageViews: '1M',
        monthlyCost: 36,
        leftPercentage: 100
    },
]

