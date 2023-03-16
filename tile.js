export class Tile {
    constructor(gridElement) {
        this.tileElement = document.createElement('div');
        this.tileElement.classList.add('tile');
        this.setValue(Math.random() > 0.5 ? 2 : 4);
        this.tileElement.textContent = this.value;
        gridElement.append(this.tileElement);
    };


    setXY(x, y) {
        this.x = x;
        this.y = y;
        this.tileElement.style.setProperty('--x', x);
        this.tileElement.style.setProperty('--y', y);
    }
    setValue(value) {
        this.value = value;
        this.tileElement.textContent = value; 
        const bgLightnes = 100 - Math.log2(value) * 9;
        this.tileElement.style.setProperty('--bg-lightnes', `${bgLightnes}%`);
        this.tileElement.style.setProperty('--text-lightnes', `${bgLightnes < 50? 90: 10}%`);
    }

    removeFromDOM() {
        this.tileElement.remove();
    }

    waitForTransitionEnd() {
        return new Promise(resolve => {
            this.tileElement.addEventListener('transitionend', resolve, { once: true });
        })
    }
    waitForTAnimationEnd() {
        return new Promise(resolve => {
            this.tileElement.addEventListener('animationend', resolve, { once: true });
        })
    }
}