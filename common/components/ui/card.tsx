import * as React from "react"

import { cn } from "@/lib/utils"

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
}

function Card({
  className,
  ...props
}: CardProps) {
  return <div className={cn("rounded-xl border bg-card text-card-foreground shadow", className)} {...props} />
}

type CardHeaderProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  className?: string;
}

function CardHeader({
  className,
  ...props
}: CardHeaderProps) {
  return <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
}

type CardTitleProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
}

function CardTitle({
  className,
  ...props
}: CardTitleProps) {
  return <div className={cn("font-normal leading-none tracking-tight", className)} {...props} />
}

type CardDescriptionProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  className?: string;
}

function CardDescription({
  className,
  ...props
}: CardDescriptionProps) {
  return <div  className={cn("text-sm text-muted-foreground", className)} {...props} />
}

type CardContentProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
}

function CardContent({
  className,
  ...props
}: CardContentProps) {
  return <div className={cn("p-6 pt-0", className)} {...props} />
}

type CardFooterProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  className?: string;
}

function CardFooter({
  className,
  ...props
}: CardFooterProps) {
  return <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
