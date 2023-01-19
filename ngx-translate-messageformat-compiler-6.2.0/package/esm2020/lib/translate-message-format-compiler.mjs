import { Inject, Injectable, Optional } from "@angular/core";
import { TranslateCompiler } from "@ngx-translate/core";
import MessageFormat from "@messageformat/core";
import { defaultConfig, MESSAGE_FORMAT_CONFIG, } from "./message-format-config";
import * as i0 from "@angular/core";
/**
 * This compiler expects ICU syntax and compiles the expressions with messageformat.js
 */
export class TranslateMessageFormatCompiler extends TranslateCompiler {
    constructor(config) {
        super();
        this.mfCache = new Map();
        const { formatters: customFormatters, biDiSupport, strictNumberSign: strict, currency, } = {
            ...defaultConfig,
            ...config,
        };
        this.config = { customFormatters, biDiSupport, strict, currency };
    }
    compile(value, lang) {
        return this.getMessageFormatInstance(lang).compile(value);
    }
    compileTranslations(translations, lang) {
        if (typeof translations === "string") {
            return this.compile(translations, lang);
        }
        return Object.keys(translations).reduce((acc, key) => {
            const value = translations[key];
            return { ...acc, [key]: this.compileTranslations(value, lang) };
        }, {});
    }
    getMessageFormatInstance(locale) {
        if (!this.mfCache.has(locale)) {
            this.mfCache.set(locale, new MessageFormat(locale, this.config));
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.mfCache.get(locale);
    }
}
TranslateMessageFormatCompiler.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: TranslateMessageFormatCompiler, deps: [{ token: MESSAGE_FORMAT_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
TranslateMessageFormatCompiler.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: TranslateMessageFormatCompiler });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: TranslateMessageFormatCompiler, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MESSAGE_FORMAT_CONFIG]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLW1lc3NhZ2UtZm9ybWF0LWNvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90cmFuc2xhdGUtbWVzc2FnZS1mb3JtYXQtY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sYUFBdUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQ0wsYUFBYSxFQUViLHFCQUFxQixHQUN0QixNQUFNLHlCQUF5QixDQUFDOztBQUVqQzs7R0FFRztBQUVILE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxpQkFBaUI7SUFJbkUsWUFHRSxNQUE0QjtRQUU1QixLQUFLLEVBQUUsQ0FBQztRQVJGLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBeUIsQ0FBQztRQVVqRCxNQUFNLEVBQ0osVUFBVSxFQUFFLGdCQUFnQixFQUM1QixXQUFXLEVBQ1gsZ0JBQWdCLEVBQUUsTUFBTSxFQUN4QixRQUFRLEdBQ1QsR0FBRztZQUNGLEdBQUcsYUFBYTtZQUNoQixHQUFHLE1BQU07U0FDVixDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDcEUsQ0FBQztJQUVNLE9BQU8sQ0FBQyxLQUFhLEVBQUUsSUFBWTtRQUN4QyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLG1CQUFtQixDQUFDLFlBQWlCLEVBQUUsSUFBWTtRQUN4RCxJQUFJLE9BQU8sWUFBWSxLQUFLLFFBQVEsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FDckMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDWCxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsT0FBTyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2xFLENBQUMsRUFDRCxFQUFFLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTyx3QkFBd0IsQ0FBQyxNQUFjO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FDZCxNQUFNLEVBQ04sSUFBSSxhQUFhLENBQVcsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDakQsQ0FBQztTQUNIO1FBRUQsb0VBQW9FO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUM7SUFDbkMsQ0FBQzs7MkhBcERVLDhCQUE4QixrQkFNL0IscUJBQXFCOytIQU5wQiw4QkFBOEI7MkZBQTlCLDhCQUE4QjtrQkFEMUMsVUFBVTs7MEJBTU4sUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUNvbXBpbGVyIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCBNZXNzYWdlRm9ybWF0LCB7IE1lc3NhZ2VGb3JtYXRPcHRpb25zIH0gZnJvbSBcIkBtZXNzYWdlZm9ybWF0L2NvcmVcIjtcbmltcG9ydCB7XG4gIGRlZmF1bHRDb25maWcsXG4gIE1lc3NhZ2VGb3JtYXRDb25maWcsXG4gIE1FU1NBR0VfRk9STUFUX0NPTkZJRyxcbn0gZnJvbSBcIi4vbWVzc2FnZS1mb3JtYXQtY29uZmlnXCI7XG5cbi8qKlxuICogVGhpcyBjb21waWxlciBleHBlY3RzIElDVSBzeW50YXggYW5kIGNvbXBpbGVzIHRoZSBleHByZXNzaW9ucyB3aXRoIG1lc3NhZ2Vmb3JtYXQuanNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZU1lc3NhZ2VGb3JtYXRDb21waWxlciBleHRlbmRzIFRyYW5zbGF0ZUNvbXBpbGVyIHtcbiAgcHJpdmF0ZSBtZkNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIE1lc3NhZ2VGb3JtYXQ+KCk7XG4gIHByaXZhdGUgY29uZmlnOiBNZXNzYWdlRm9ybWF0T3B0aW9uczxcInN0cmluZ1wiPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoTUVTU0FHRV9GT1JNQVRfQ09ORklHKVxuICAgIGNvbmZpZz86IE1lc3NhZ2VGb3JtYXRDb25maWdcbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGZvcm1hdHRlcnM6IGN1c3RvbUZvcm1hdHRlcnMsXG4gICAgICBiaURpU3VwcG9ydCxcbiAgICAgIHN0cmljdE51bWJlclNpZ246IHN0cmljdCxcbiAgICAgIGN1cnJlbmN5LFxuICAgIH0gPSB7XG4gICAgICAuLi5kZWZhdWx0Q29uZmlnLFxuICAgICAgLi4uY29uZmlnLFxuICAgIH07XG5cbiAgICB0aGlzLmNvbmZpZyA9IHsgY3VzdG9tRm9ybWF0dGVycywgYmlEaVN1cHBvcnQsIHN0cmljdCwgY3VycmVuY3kgfTtcbiAgfVxuXG4gIHB1YmxpYyBjb21waWxlKHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IChwYXJhbXM6IGFueSkgPT4gc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRNZXNzYWdlRm9ybWF0SW5zdGFuY2UobGFuZykuY29tcGlsZSh2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgY29tcGlsZVRyYW5zbGF0aW9ucyh0cmFuc2xhdGlvbnM6IGFueSwgbGFuZzogc3RyaW5nKTogYW55IHtcbiAgICBpZiAodHlwZW9mIHRyYW5zbGF0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZSh0cmFuc2xhdGlvbnMsIGxhbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvbnMpLnJlZHVjZTx7IFtrZXk6IHN0cmluZ106IGFueSB9PihcbiAgICAgIChhY2MsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRyYW5zbGF0aW9uc1trZXldO1xuICAgICAgICByZXR1cm4geyAuLi5hY2MsIFtrZXldOiB0aGlzLmNvbXBpbGVUcmFuc2xhdGlvbnModmFsdWUsIGxhbmcpIH07XG4gICAgICB9LFxuICAgICAge31cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNZXNzYWdlRm9ybWF0SW5zdGFuY2UobG9jYWxlOiBzdHJpbmcpOiBNZXNzYWdlRm9ybWF0IHtcbiAgICBpZiAoIXRoaXMubWZDYWNoZS5oYXMobG9jYWxlKSkge1xuICAgICAgdGhpcy5tZkNhY2hlLnNldChcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBuZXcgTWVzc2FnZUZvcm1hdDxcInN0cmluZ1wiPihsb2NhbGUsIHRoaXMuY29uZmlnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgIHJldHVybiB0aGlzLm1mQ2FjaGUuZ2V0KGxvY2FsZSkhO1xuICB9XG59XG4iXX0=