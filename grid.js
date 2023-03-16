
import { Cell } from "./cell.js";

const GRIDE_SIZE = 4;
const CELL_COUNT = GRIDE_SIZE * GRIDE_SIZE;

export class Grid {
    constructor(gridElement) {
        this.cells = [];
        for (let i = 0; i < CELL_COUNT; i+=1) {
            this.cells.push(
                new Cell(gridElement, i % GRIDE_SIZE, Math.floor(i / GRIDE_SIZE))
            );
        }
        this.cellsGroupedByColumn = this.groupCellsByColumn();
        this.cellsGroupedByReversedColumn = this.groupCellsByColumn().map(column => [...column].reverse());
        this.cellsGroupedByRow = this.groupCellsByRow();
        this.cellsGroupedByReversedRow = this.groupCellsByRow().map(row => [...row].reverse());
    }

    getRandomEmptyCell() {
        const emptyCells = this.cells.filter(cell => cell.isEmpty());
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        return emptyCells[randomIndex];
    }

    groupCellsByColumn() {
        return this.cells.reduce((groupedCells, cell) => {
            groupedCells[cell.x] = groupedCells[cell.x] || [];
            groupedCells[cell.x][cell.y] = cell;
            return groupedCells;
         }, []);
    }

    groupCellsByRow() {
        return this.cells.reduce((groupedCells, cell) => {
            groupedCells[cell.y] = groupedCells[cell.y] || [];
            groupedCells[cell.y][cell.x] = cell;
            return groupedCells;
         }, []);
    }
}