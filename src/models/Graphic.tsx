import { getBoundingRect } from "../utils/GraphicsLogic";
import { BoundingRect, Position, Size } from "./IGraphic";

export abstract class Graphic {
    position : Position;
    size : Size;
    boundingRect : BoundingRect;
    ctx: CanvasRenderingContext2D;

    abstract draw(ctx: CanvasRenderingContext2D) : void;

    constructor(position : Position, size : Size, ctx : CanvasRenderingContext2D){
        this.position = position;
        this.size = size;
        this.boundingRect = getBoundingRect(this.position, this.size);
        this.ctx = ctx;
    }



    recalculateBoundingRect() : void {
        this.boundingRect = getBoundingRect(this.position, this.size);
    }
}