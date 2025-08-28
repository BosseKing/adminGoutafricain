const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

// Charger la préférence de mode sombre au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
	const isDarkMode = localStorage.getItem('darkMode') === 'true';
	if (isDarkMode) {
		document.body.classList.add('dark');
		switchMode.checked = true;
	}
});

// Variables globales pour stocker les graphiques
let monthlySalesChart, categoryChart, salesChart, reservationsChart, performanceChart, topDishesChart;

// Fonction pour obtenir les couleurs selon le mode
function getChartColors() {
    const isDark = document.body.classList.contains('dark');
    return {
        textColor: isDark ? '#FBFBFB' : '#333',
        gridColor: isDark ? '#404040' : '#e0e0e0',
        backgroundColor: isDark ? '#060714' : 'white'
    };
}

// Fonction pour mettre à jour tous les graphiques
function updateChartsForDarkMode() {
    const colors = getChartColors();
    
    // Mettre à jour monthlySalesChart
    if (monthlySalesChart) {
        monthlySalesChart.options.plugins.legend.labels.color = colors.textColor;
        monthlySalesChart.options.scales.x.ticks.color = colors.textColor;
        monthlySalesChart.options.scales.y.ticks.color = colors.textColor;
        monthlySalesChart.options.scales.x.grid.color = colors.gridColor;
        monthlySalesChart.options.scales.y.grid.color = colors.gridColor;
        monthlySalesChart.update();
    }
    
    // Mettre à jour categoryChart
    if (categoryChart) {
        categoryChart.options.plugins.legend.labels.color = colors.textColor;
        categoryChart.update();
    }
    
    // Mettre à jour salesChart
    if (salesChart) {
        salesChart.options.scales.x.ticks.color = colors.textColor;
        salesChart.options.scales.y.ticks.color = colors.textColor;
        salesChart.options.scales.x.grid.color = colors.gridColor;
        salesChart.options.scales.y.grid.color = colors.gridColor;
        salesChart.update();
    }
    
    // Mettre à jour reservationsChart
    if (reservationsChart) {
        if (reservationsChart.options.plugins && reservationsChart.options.plugins.legend) {
            reservationsChart.options.plugins.legend.labels.color = colors.textColor;
        }
        reservationsChart.update();
    }
    
    // Mettre à jour performanceChart
    if (performanceChart) {
        if (performanceChart.options.scales) {
            performanceChart.options.scales.x.ticks.color = colors.textColor;
            performanceChart.options.scales.y.ticks.color = colors.textColor;
            performanceChart.options.scales.x.grid.color = colors.gridColor;
            performanceChart.options.scales.y.grid.color = colors.gridColor;
        }
        performanceChart.update();
    }
    
    // Mettre à jour topDishesChart
    if (topDishesChart) {
        if (topDishesChart.options.plugins && topDishesChart.options.plugins.legend) {
            topDishesChart.options.plugins.legend.labels.color = colors.textColor;
        }
        if (topDishesChart.options.scales) {
            topDishesChart.options.scales.x.ticks.color = colors.textColor;
            topDishesChart.options.scales.y.ticks.color = colors.textColor;
            topDishesChart.options.scales.x.grid.color = colors.gridColor;
            topDishesChart.options.scales.y.grid.color = colors.gridColor;
        }
        topDishesChart.update();
    }
}

// Appel initial pour configurer les graphiques selon le mode actuel
setTimeout(() => {
    updateChartsForDarkMode();
}, 500);

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
		localStorage.setItem('darkMode', 'true');
	} else {
		document.body.classList.remove('dark');
		localStorage.setItem('darkMode', 'false');
	}
	
	// Mettre à jour les graphiques après le changement de mode
	setTimeout(updateChartsForDarkMode, 100);
})


// Fonction pour afficher la section sélectionnée
function showSection(sectionId) {
    
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
   
    document.getElementById(`${sectionId}-section`).classList.remove('hidden');
}

function addProduct() {
    alert("Fonction d'ajout de produit en cours de développement !");
}

// Fonctions pour la section Paramètres
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour sauvegarder les informations du restaurant
    function saveRestaurantInfo() {
        const restaurantName = document.getElementById('restaurant-name').value;
        const restaurantAddress = document.getElementById('restaurant-address').value;
        const restaurantPhone = document.getElementById('restaurant-phone').value;
        const restaurantEmail = document.getElementById('restaurant-email').value;
        const restaurantDescription = document.getElementById('restaurant-description').value;
        
        // Ici vous pourriez envoyer les données au serveur
        alert('Informations du restaurant sauvegardées avec succès !');
    }

    // Fonction pour sauvegarder les horaires
    function saveHours() {
        alert('Horaires d\'ouverture sauvegardés avec succès !');
    }

    // Fonction pour sauvegarder les notifications
    function saveNotifications() {
        alert('Paramètres de notification sauvegardés avec succès !');
    }

    // Fonction pour sauvegarder les paramètres de livraison
    function saveDeliverySettings() {
        alert('Paramètres de livraison sauvegardés avec succès !');
    }

    // Fonction pour sauvegarder les modes de paiement
    function savePaymentSettings() {
        alert('Modes de paiement sauvegardés avec succès !');
    }

    // Fonction pour effectuer une sauvegarde
    function performBackup() {
        const confirmBackup = confirm('Êtes-vous sûr de vouloir effectuer une sauvegarde ?');
        if (confirmBackup) {
            // Simuler une sauvegarde
            alert('Sauvegarde en cours...');
            setTimeout(() => {
                document.querySelector('.backup-date').textContent = new Date().toLocaleString('fr-FR');
                alert('Sauvegarde effectuée avec succès !');
            }, 2000);
        }
    }

    // Fonction pour nettoyer les logs
    function cleanupLogs() {
        const confirmCleanup = confirm('Êtes-vous sûr de vouloir nettoyer les anciens logs ?');
        if (confirmCleanup) {
            alert('Logs nettoyés avec succès !');
        }
    }

    // Fonction pour exporter les données
    function exportData() {
        alert('Export des données en cours...');
        // Simuler un téléchargement
        setTimeout(() => {
            alert('Données exportées avec succès !');
        }, 1500);
    }

    // Ajouter les gestionnaires d'événements
    const saveButtons = document.querySelectorAll('.save-btn');
    saveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parentCard = this.closest('.settings-card');
            const cardTitle = parentCard.querySelector('h3').textContent;
            
            if (cardTitle.includes('Informations du Restaurant')) {
                saveRestaurantInfo();
            } else if (cardTitle.includes('Horaires')) {
                saveHours();
            } else if (cardTitle.includes('Notification')) {
                saveNotifications();
            } else if (cardTitle.includes('Livraison')) {
                saveDeliverySettings();
            } else if (cardTitle.includes('Paiement')) {
                savePaymentSettings();
            }
        });
    });

    // Gestionnaires pour les boutons de maintenance
    const backupBtn = document.querySelector('.backup-btn');
    if (backupBtn) {
        backupBtn.addEventListener('click', performBackup);
    }

    const cleanupBtn = document.querySelector('.cleanup-btn');
    if (cleanupBtn) {
        cleanupBtn.addEventListener('click', cleanupLogs);
    }

    const exportBtn = document.querySelector('.export-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportData);
    }

    // Gestionnaire pour les switches de notification
    const notificationSwitches = document.querySelectorAll('.notification-item input[type="checkbox"]');
    notificationSwitches.forEach(switchElement => {
        switchElement.addEventListener('change', function() {
            const label = this.closest('.notification-item').querySelector('span').textContent;
            const status = this.checked ? 'activées' : 'désactivées';
            console.log(`${label} ${status}`);
        });
    });
});

