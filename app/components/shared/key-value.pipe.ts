import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'keyValue'
})

export class KeyValuePipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        const className = value.constructor.name;
        switch (className) {
            case 'Map': return this.transformMap(value);
        }

        throw new Error(`Can't transform the ${value} unknow ${className} class`);
    }

    private transformMap(map: Map<any, any>) {
        let result = [];
        map.forEach(function (value, key, map) {
            result.push({ key: key, value: value });
        });
        return result;
    }
}
