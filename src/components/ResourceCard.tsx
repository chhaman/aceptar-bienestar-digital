
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  path: string;
  badge?: string;
}

const ResourceCard = ({ title, description, icon, buttonText, path, badge }: ResourceCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden border border-border shadow-sm hover:shadow-md transition-all">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-aceptar-light-purple rounded-full mr-3">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">
              {title}
              {badge && (
                <span className="ml-2 inline-block px-2 py-0.5 text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-200 rounded-full">
                  {badge}
                </span>
              )}
            </h3>
          </div>
        </div>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          onClick={() => navigate(path)}
          className="w-full bg-aceptar-purple hover:bg-aceptar-dark-purple text-white"
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
