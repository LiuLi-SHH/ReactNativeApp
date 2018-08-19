
//
//  ReactNativeViewController.m
//  AwesomeProject
//
//  Created by xxx_Mac on 2018/5/16.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "ReactNativeViewController.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface ReactNativeViewController ()

@end

@implementation ReactNativeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
  
  
  NSURL *jsCodeLocation;
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"AwesomeProject"
                                               initialProperties:nil
                                                   launchOptions:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  rootView.frame = self.view.frame;
  [self.view addSubview:rootView];
  
  UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
  btn.backgroundColor = [UIColor redColor];
  [btn addTarget:self action:@selector(backAction) forControlEvents:UIControlEventTouchUpInside];
  btn.frame = CGRectMake(10, self.view.frame.size.height - 100, 50, 50);
  [self.view addSubview:btn];
}
  
  - (void)backAction
  {
    [self.navigationController popViewControllerAnimated:YES];
  }

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

- (void)dealloc
{
  NSLog(@"======页面销毁了======");
}

@end
