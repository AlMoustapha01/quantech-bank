import { cn } from "@/lib/utils";

export function CardsIcon({ className, pathClassName }: { className?: string, pathClassName?: string }) {
    return (
        <svg className={cn("w-16 h-15", className)} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={cn("stroke-foreground", pathClassName)} d="M1 7.65692H12.776" stroke="#22283B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path className={cn("stroke-foreground", pathClassName)} d="M12.776 6.043V10.9959C12.7553 12.9701 12.2149 13.4688 10.1576 13.4688H3.61846C1.52648 13.4688 1 12.9494 1 10.8851V6.043C1 4.17272 1.43641 3.57006 3.07812 3.47308C3.24437 3.46616 3.4245 3.45923 3.61846 3.45923H10.1576C12.2496 3.45923 12.776 3.97876 12.776 6.043Z" stroke="#22283B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path className={cn("stroke-foreground", pathClassName)} d="M14.8542 3.5838V8.42583C14.8542 10.2961 14.4178 10.8988 12.776 10.9958V6.04292C12.776 3.97865 12.2496 3.45911 10.1576 3.45911H3.61846C3.4245 3.45911 3.24437 3.46604 3.07812 3.47297C3.09891 1.49875 3.63924 1 5.69658 1H12.2357C14.3277 1 14.8542 1.51953 14.8542 3.5838Z" stroke="#22283B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path className={cn("stroke-foreground", pathClassName)} d="M3.25137 11.259H4.44281" stroke="#22283B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path className={cn("stroke-foreground", pathClassName)} d="M5.92508 11.259H8.30802" stroke="#22283B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}