
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type ResourceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  path: string;
};

const ResourceCard = ({ title, description, icon, buttonText, path }: ResourceCardProps) => {
  return (
    <Card className="transition-all hover:shadow-lg h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="p-2 rounded-full bg-aceptar-light-purple text-aceptar-purple">
            {icon}
          </div>
        </div>
        <CardTitle className="text-lg mt-2">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        {/* Content can be added here if needed */}
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full border-aceptar-purple text-aceptar-dark-purple hover:bg-aceptar-purple hover:text-white"
          asChild
        >
          <Link to={path}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
