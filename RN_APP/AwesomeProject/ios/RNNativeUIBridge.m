//
//  RNNativeUIBridge.m
//  AwesomeProject
//
//  Created by xxx_Mac on 2018/5/25.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RNNativeUIBridge.h"
#import <MapKit/MapKit.h>

@implementation RNNativeUIBridge

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[MKMapView alloc] init];
}







@end
