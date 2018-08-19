//
//  RNTMapManager.m
//  AwesomeProject
//
//  Created by xxx_Mac on 2018/5/25.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RNTMapManager.h"
#import <MapKit/MapKit.h>

@implementation RNTMapManager
RCT_EXPORT_MODULE()

- (UIView *)view
{
  UIView *view = [[UIView alloc] init];
  view.backgroundColor = [UIColor redColor];
  
  return view;
}
@end
