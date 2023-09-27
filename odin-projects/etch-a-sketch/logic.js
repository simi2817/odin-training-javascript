
const container = document.getElementById('gridContainer');

const generateGrid = () => {
    const dimension = document.getElementById('dimension').value;
    
    document.getElementById('dimension').value = null;
    
    if(dimension > 100)
        alert('Warning! Dimension value should not exceed 100! Please enter a value between 1 and 100!');
    else {
        for(let i = 0; i < (dimension*dimension); i++) {
            let gridRow = document.createElement('div');
            gridRow.classList.add('gridRow');
            container.appendChild(gridRow);
        }   
    
        container.style.setProperty('--row', dimension);
        container.style.setProperty('--col', dimension);
    
        const grids = document.querySelectorAll('.gridRow');
    
        grids.forEach(grid => 
        grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = 'darkgrey';
        }));
    }
}

const clearGrid = () => {
    const grids = document.querySelectorAll('.gridRow');
    grids.forEach((grid) => { 
        grid.style.backgroundColor = null;
        grid.style.border = '1px solid lightgrey';
    });
}

const rainbowGrid = () => {
    const grids = document.querySelectorAll('.gridRow');
    grids.forEach(grid => 
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }));
}

const greyGrid = () => {
    const grids = document.querySelectorAll('.gridRow');
    grids.forEach(grid => 
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'darkgrey';
    }));
}

const colorPicker = document.getElementById('colorPickerMode');
    colorPicker.addEventListener('input', (e) => {
        const grids = document.querySelectorAll('.gridRow');
        grids.forEach(grid => 
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = e.target.value;
    }));
    });
