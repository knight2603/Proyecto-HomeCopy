// Report data
let reports = [
    {
        id: 1,
        title: 'Reporte de Ventas',
        type: 'sales',
        lastGenerated: '15 Mar 2024',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            values: [4500, 5200, 6100, 4800, 5900, 6800]
        }
    },
    {
        id: 2,
        title: 'Reporte de Usuarios',
        type: 'users',
        lastGenerated: '14 Mar 2024',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            values: [120, 150, 180, 210, 250, 280]
        }
    },
    {
        id: 3,
        title: 'Reporte de Inventario',
        type: 'inventory',
        lastGenerated: '13 Mar 2024',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            values: [850, 920, 880, 940, 890, 950]
        }
    },
    {
        id: 4,
        title: 'Reporte Financiero',
        type: 'financial',
        lastGenerated: '12 Mar 2024',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            values: [12500, 13200, 14100, 13800, 15900, 16800]
        }
    }
];

// Modal functionality
function openModal(reportId) {
    const report = reports.find(r => r.id === reportId);
    if (!report) return;

    document.getElementById('reportTitle').textContent = report.title;
    document.getElementById('reportModal').classList.remove('hidden');
    
    // Set up form values
    document.getElementById('reportType').value = report.type;
    document.getElementById('dateRange').value = 'last6months';
    
    // Show preview chart
    renderChart(report.data);
}

function closeModal() {
    document.getElementById('reportModal').classList.add('hidden');
}

function renderChart(data) {
    const ctx = document.getElementById('reportPreview').getContext('2d');
    
    // Clear previous chart
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Simple line chart
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const padding = 40;
    const dataPoints = data.values;
    
    // Find min and max values
    const max = Math.max(...dataPoints);
    const min = Math.min(...dataPoints);
    
    // Calculate scales
    const xScale = (width - padding * 2) / (dataPoints.length - 1);
    const yScale = (height - padding * 2) / (max - min);
    
    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = '#e5e7eb';
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Draw line
    ctx.beginPath();
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    
    dataPoints.forEach((point, index) => {
        const x = padding + (index * xScale);
        const y = height - (padding + (point - min) * yScale);
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Draw points
    dataPoints.forEach((point, index) => {
        const x = padding + (index * xScale);
        const y = height - (padding + (point - min) * yScale);
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#3b82f6';
        ctx.fill();
    });
    
    // Draw labels
    ctx.fillStyle = '#6b7280';
    ctx.font = '12px sans-serif';
    data.labels.forEach((label, index) => {
        const x = padding + (index * xScale);
        ctx.fillText(label, x - 10, height - padding + 20);
    });
}

function generateReport(event) {
    event.preventDefault();
    
    const type = document.getElementById('reportType').value;
    const dateRange = document.getElementById('dateRange').value;
    
    // Simulate report generation
    setTimeout(() => {
        alert('Reporte generado exitosamente');
        closeModal();
        
        // Update last generated date
        const now = new Date();
        const reportCard = document.querySelector(`[data-report-type="${type}"]`);
        if (reportCard) {
            const dateElement = reportCard.querySelector('.text-sm.text-gray-600');
            dateElement.textContent = `Último reporte generado: ${now.getDate()} ${now.toLocaleString('es', { month: 'short' })} ${now.getFullYear()}`;
        }
    }, 1000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers for generate buttons
    const generateButtons = document.querySelectorAll('[data-report-id]');
    generateButtons.forEach(button => {
        button.addEventListener('click', () => {
            openModal(parseInt(button.dataset.reportId));
        });
    });

    // Modal close handlers
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('cancelButton').addEventListener('click', closeModal);
    document.getElementById('reportModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('reportModal')) {
            closeModal();
        }
    });

    // Form submit handler
    document.getElementById('reportForm').addEventListener('submit', generateReport);

    // Logout handler
    document.getElementById('logoutButton').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            window.location.href = 'login.html';
        }
    });
});